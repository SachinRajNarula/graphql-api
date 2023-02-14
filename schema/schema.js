const graphql = require("graphql");
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const users = [
    {"id": "01", "username": "Bill", "password":"1234", "email":"bill@bell.ca"},
    {"id": "02", "username": "Bill", "password":"1234", "email":"bill@bell.ca"},
    {"id": "03", "username": "Bill", "password":"1234", "email":"bill@bell.ca"},
    {"id": "04", "username": "Bill", "password":"1234", "email":"bill@bell.ca"},
    {"id": "05", "username": "Bill", "password":"1234", "email":"bill@bell.ca"}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        username:{type: GraphQLString},
        password:{type: GraphQLString},
        email:{type: GraphQLString}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args: {id:{type:GraphQLString}},
            resolve(parentValue, args){
                return _.find(users,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})