# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket-1 
=========
title : create db migration script for adding new column in the agent table.
description: create db migration script for adding new column called "agent_id" as Varchar(250) in agent table. the new column should be nullable, and default value should be NULL
also add unique constraint for combination of "custom_agent_id" and "facilities_id".


estimates: 1 hr

Ticket-2 
=========
title :  API changes for custom agent id implementation.
description: accept new payload in create and update api's (customAgentId). and save to "custom_agent_id".
if value is empty then save NULL.

if custom agent id is avalilable for agent then it should be available in agent metadata details.

acceptance criteria :

validate and throw error message if passed custom agent id not existing for the facilitator other than current agent in create and update


estimates: 3 hr

Ticket-3
=========
title : UI - introduce new field Agent id in agent details page and save the data
description: introduce a new text box input field in agent details page named "Agent Id".


acceptance criteria :
it should accept alpha numeric characters,
do not allow white space.
show error message to user if enterd value already existing 

estimates: 2 hr

Ticket-4
=========
title : include custom agent id in facilitator report
description: in facilitator report page and pdf, if there is custom agent id added for agent, then show that id in report. if not show system genrated id

acceptance criteria :
custom agent id should show in reports and pdf if agent has custom id,
if there is no custom agent id then system generated id will show in agent id section

estimates: 2 hr