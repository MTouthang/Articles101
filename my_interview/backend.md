# 1. Aggregation in mongodb
Data aggregation is the process of collecting combining and organizing data from multiple sources or location in a way that allows it to be analyzed and summarized.

- In MongoDB, the aggregation Pipeline framework for data aggregation that allow you to process and analyze large datasets using a variety of stages that transform data in various ways
- The aggregation pipleline consist of series of stages, each of which takes input document processes them, output new document or final document.
- To use aggregation in mongodb you pass an array of stages to the `aggregate()` method of collection.
- Each stages takes a set of input documents, perform specific operation on them and output new document or final output.
- They are variety of stages available in the aggregation pipeline, including:
    - `$match` filter the document to pass only the document that match the specified condition.
    - `$project` reshape the document in the input stream by adding, deleting, modifying fields or by creating computed fields.
    - `$group` groups the input documents by a specified identifier expression and applies one or more accumulator expressions to each group.
    - `$sort` sorts the input documents by a specified sort key.
    - `$skip` skips a number of documents from the input.
    - `$limit`  limits the number of documents in the input.
    - `$unwind`  deconstructs an array field from the input documents to output a document for each element.
    
```javaScript
// Example ---
db.sales.aggregate([
{$match: {item: "apple"} },
{$group: {_id: "$store", total: {$sum: "$price"}}}
])
// output - 
// This will output a document for each store that sold apples, with the _id field set to the store name and the total field set to the total sales of apples for that store.
```
# 2. Middleware
-    In Nodejs, Middleware is a function that is executed in the sever side between incoming request and the route handling function.
- It has access to the request response objects and can perform task such as validation, authentication, logging or any other function that needs to be performed before the request is passed to the route handling function.

```javascript
// syntax ---
function middleware(req, res, next) {
// perform some task
//...
//call the next middleware function in the stack
next()
}
```
