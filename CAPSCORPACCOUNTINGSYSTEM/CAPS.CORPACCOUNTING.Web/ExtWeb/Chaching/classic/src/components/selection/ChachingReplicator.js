﻿/**
 * This file contains the custom component for speadsheet selection replicator.
 * Author: Krishna Garad
 * Date:05/25/2016
 */
/**
 * A plugin for use in grids which use the {@link Ext.grid.selection.SpreadsheetModel spreadsheet} selection model,
 * with {@link Ext.grid.selection.SpreadsheetModel#extensible extensible} configured as `true` or `"y"`, meaning that
 * the selection may be extended up or down using a draggable extension handle.
 *
 * This plugin propagates values from the selection into the extension area.
 *
 * If just *one* row is selected, the values in that row are replicated unchanged into the extension area.
 *
 * If more than one row is selected, the two rows closest to the selected block are taken to provide a numeric
 * difference, and that difference is used to calculate the sequence of values all the way into the extension area.
 * 
 * Make sure to have valueField on columns which have combobox as editor.
 */
Ext.define('Chaching.components.selection.ChachingReplicator', {
    extend: 'Ext.grid.selection.Replicator',
    alias: 'plugin.chachingselectionreplicator',
    /**
     * This is the method which is called when the {@link Ext.grid.selection.SpreadsheetModel spreadsheet} selection model's
     * extender handle is dragged and released.
     *
     * It is passed contextual information about the selection and the extension area.
     *
     * Subclass authors may override it to gain access to the event and perform their own data replication.
     *
     * By default, the selection is extended to encompass the selection area. Returning `false` from this method
     * vetoes that.
     *
     * @param {Ext.panel.Table} ownerGrid The owning grid.
     * @param {Ext.grid.selection.Selection} sel An object describing the contiguous selected area.
     * @param {Object} extension An object describing the type and size of extension.
     * @param {String} extension.type `"rows"` or `"columns"`
     * @param {Ext.grid.CellContext} extension.start The start (top left) cell of the extension area.
     * @param {Ext.grid.CellContext} extension.end The end (bottom right) cell of the extension area.
     * @param {number} [extension.columns] The number of columns extended (-ve means on the left side).
     * @param {number} [extension.rows] The number of rows extended (-ve means on the top side).
     */
    replicateSelection: function(ownerGrid, sel, extension) {

        // This can only handle extending rows
        if (extension.columns || sel.isColumns) {
            return;
        }
        //complete editing before replicating else replicator will not have parent records values.
        var editingPlugin = ownerGrid.getPlugin('editingPlugin');
        if (editingPlugin) {
            editingPlugin.completeEdit();
        }
        var me = this,
            columns = me.columns,
            colCount,
            j,
            column,
            values,
            startIdx,
            endIdx,
            i,
            increment,
            store,
            record,
            prevValues,
            prevValue,
            selFirstRowIdx = sel.getFirstRowIndex(),
            selLastRowIdx = sel.getLastRowIndex(),
            selectedRowCount = selLastRowIdx - selFirstRowIdx + 1,
            lastTwoRecords = [],
            x,
            y;

        colCount = columns.length,
            store = columns[0].getView().dataSource;

        // Single row, just duplicate values into extension
        if (selectedRowCount === 1) {
            values = me.getColumnValues(sel.view.dataSource.getAt(selFirstRowIdx));
        }
        // Multiple rows, take the numeric values from the closest two rows, calculate an array of differences and propagate it
        else {
            values = new Array(colCount);
            if (extension.rows < 0) {
                lastTwoRecords = [
                    store.getAt(selFirstRowIdx + 1),
                    store.getAt(selFirstRowIdx)
                ];
            } else {
                lastTwoRecords = [
                    store.getAt(selLastRowIdx - 1),
                    store.getAt(selLastRowIdx)
                ];
            }
            lastTwoRecords[0] = me.getColumnValues(lastTwoRecords[0]);
            lastTwoRecords[1] = me.getColumnValues(lastTwoRecords[1]);

            // The values array will be the differences between all numeric columns in the selection of the
            // closet two records.
            for (j = 0; j < colCount; j++) {
                x = lastTwoRecords[1][j];
                y = lastTwoRecords[0][j];
                if (!isNaN(x) && !isNaN(y)) {
                    values[j] = Number(x) - Number(y);
                }
            }
        }

        // Loop from end to start of extension area
        if (extension.rows < 0) {
            startIdx = extension.end.rowIdx;
            endIdx = extension.start.rowIdx - 1;
            increment = -1;
        } else {
            startIdx = extension.start.rowIdx;
            endIdx = extension.end.rowIdx + 1;
            increment = 1;
        }
        
        var parentRecord = store.getAt(startIdx - 1);
        // Replicate single selected row
        if (selectedRowCount === 1) {
            for (i = startIdx; i !== endIdx; i += increment) {
                record = store.getAt(i);
                for (j = 0; j < colCount; j++) {
                    column = columns[j];
                    if (column.dataIndex) {
                        if (column.valueField && parentRecord) {
                            record.set(column.dataIndex, values[j]);
                            record.set(column.valueField, parentRecord.get(column.valueField));
                        } else record.set(column.dataIndex, values[j]);
                    }
                }
            }
        }
        // Add differences from closest two rows
        else {
            for (i = startIdx; i !== endIdx; i += increment) {
                record = store.getAt(i);
                prevValues = me.getColumnValues(store.getAt(i - increment));
                for (j = 0; j < colCount; j++) {
                    column = columns[j];
                    if (column.dataIndex) {
                        prevValue = prevValues[j];
                        if (!isNaN(prevValue)) {
                            if (column.valueField && parentRecord) {
                                record.set(column.dataIndex, Ext.coerce(Number(prevValue) + values[j], prevValue));
                                record.set(column.valueField, parentRecord.get(column.valueField));
                            } else
                                record.set(column.dataIndex, Ext.coerce(Number(prevValue) + values[j], prevValue));
                        }
                    }
                }
            }
        }
    }

});