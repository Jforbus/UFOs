# UFOs

## Project Overview

This project entails the display of data related to UFO sightings through a dynamic webpage to facilitate independent research and analysis. The webpage presents the UFO sighting data in a tabular format that is easily searchable through the use of 5 filters.

### Resources

- Data Source: data.js
- Software: JavaScript 1.5, Bootstrap 4.0.0, VS Code 1.71.2

## Results

At entry the webpage displays a title and brief discussion of the subject as well as a call to action for further research. Below this the entire dataset is presented in a table alongside a filter form.

![title](https://github.com/Jforbus/UFOs/blob/main/static/images/title.png)

![table](https://github.com/Jforbus/UFOs/blob/main/static/images/table.png)


The data is filterable on 5 categories: Date, City, State, Country, and Shape of sighting. The filter form provides example formats in each filter box for the user. 

![filter](https://github.com/Jforbus/UFOs/blob/main/static/images/Filter.png)

The user can input search criteria to one or all of the 5 filter fields, and see only matching results. The table updates automatically upon each filter field update.

Here the table as been filtered only by date, showing all results for May of 2010.

![date_filter](https://github.com/Jforbus/UFOs/blob/main/static/images/date_filter.png)

Next the state of the sighting is added, further narrowing the results.

![state_filter](https://github.com/Jforbus/UFOs/blob/main/static/images/state_filter.png)

To reset the table the user can simply clear the filters manually by deleting their input, or by clicking the link located at the top right corner of the page.

![reset_link](https://github.com/Jforbus/UFOs/blob/main/static/images/reset_link.png)


## Summary

The webpage functions well and looks appealing, but there is still room for improvement. The filters, while easy to use, do not suggest any inputs for the user beyond the example format. This drawback could lead to significant frustration as the user will need look intently at the unfiltered dataset prior to filtering the data, or execute a series of guesses in order to find data. A significant amount of time could be spent just determining which filter parameters actually return data. 
To eliminate this drawback the filters could be updated operate on drop down lists or to suggest search terms based on partial user inputs. 

Additionally, the reset link's location at the top of the page is not ideal. This seperates it from the table and could result in a frustrating amount of scrolling between independent searches. The navbar should be frozen at the top of viewport so that it follows the user down, making it available from anywhere on the page. Another developement on this front could be the addition of a `Clear Filters` button at the bottom of the filter form. This design would likely result in a more intuitive feel for the user, a major plus.    
