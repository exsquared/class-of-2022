## Problem Statement

### Description

You have data set of funding raised by companies, and need an ability to query the data set to filter the data based on parameters passed in the query. **Make sure you use TDD approach to implement this problem.**

#### Task

You need to write code to write two functions “findBy”, and “where”. These two functions will take options as input where options will the parameters on which you want to filter the data. Difference between findBy and where is that findBy will return the first result matching the condition, and where will return all the records matching the condition.

Data could be filter based on following parameters

1. Company Name
2. City
3. State
4. Round (Funding Round)

Companies Funding dataset is located under data folder with the name startup-funding.json

\* Make sure the code is modular, and expandable.
