export const types = `
  type Calendar {
    _id: String!
    name: String
    color: String
    userId: String
    groupId: String
    integrationId: String
  }

  type CalendarGroup {
    _id: String!
    name: String
    isPrivate: Boolean

    calendars: [Calendar]
  }
`;

const eventParams = `
  erxesApiId: String!,
  calendarId: String!,
  title: String!,
  description: String,
  start: String,
  end: String
`;

const commonParams = `
  groupId: String!,
  name: String!,
  color: String,
  integrationId: String!
`;

const commonGroupParams = `
  name: String!,
  isPrivate: Boolean,
  assignedUserIds: [String]
`;

export const queries = `
  calendarGroups: [CalendarGroup]
  calendarGroupCounts: Int
  calendarGroupGetLast: CalendarGroup
  calendarGroupDetail(_id: String!): CalendarGroup
  calendars(groupId: String, page: Int, perPage: Int): [Calendar]
  calendarDetail(_id: String!): Calendar
`;

export const mutations = `
  createCalendarEvent(${eventParams}): JSON
  editCalendarEvent(_id: String!, ${eventParams}): JSON
  deleteCalendarEvent(_id: String!, erxesApiId: String!): JSON

  calendarsAdd(${commonParams}): Calendar
  calendarsEdit(_id: String!, ${commonParams}): Calendar
  calendarsDelete(_id: String!, integrationId: String!): JSON

  calendarGroupsAdd(${commonGroupParams}): CalendarGroup
  calendarGroupsEdit(_id: String!, ${commonGroupParams}): CalendarGroup
  calendarGroupsDelete(_id: String!): JSON
`;
