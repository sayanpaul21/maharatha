﻿using System.Collections.Generic;
using Abp.Application.Services.Dto;

namespace CAPS.CORPACCOUNTING.Notifications.Dto
{
    public class GetNotificationSettingsOutput : IOutputDto
    {
        public bool ReceiveNotifications { get; set; }

        public List<NotificationSubscriptionWithDisplayNameDto> Notifications { get; set; }
    }
}