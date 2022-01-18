# Neo4j CC Nest Modules

## Scaffolding

Add a new nest library:

```sh
nx g @nrwl/nest:library --directory=nest --name={library-name} --dryRun

# For example, to create a `nest/neo4j-dbms` library
nx g @nrwl/nest:library --directory=nest --name=neo4j-dbms --dryRun
```

Add a service to a nest library:

```sh
nx g @nrwl/nest:service --directory=lib --project={library-name} --name={service-name} --dryRun

# For example, to add a `neo4j-dbms` service to the `nest/neo4j-dbms` library, 
# under the same `lib` directory as the module:
nx g @nrwl/nest:service --directory=lib --project=nest-neo4j-dbms --name=neo4j-dbms --flat --dryRun
```

Add an interface to a nest library:

```sh
nx g @nrwl/nest:interface --directory=lib/interfaces --project={library-name} --name={interface-name} --dryRun

# For example, to add a `neo4j-config` interface to the `nest-neo4j-dbms` library, 
# under the same `lib` directory as the module:
nx g @nrwl/nest:interface --directory=lib/interfaces --project=nest-neo4j-dbms --name=neo4j-config --dryRun
```

Add an interceptor to a nest library:

```sh
nx g @nrwl/nest:interceptor --directory=lib/interceptors --project={library-name} --name={interface-name} --dryRun

# For example, to add a `neo4j-transaction` interceptor to the `nest-neo4j-dbms` library, 
# under the same `lib` directory as the module:
nx g @nrwl/nest:interceptor --directory=lib/interceptors --project=nest-neo4j-dbms --name=neo4j-transaction --dryRun
```
