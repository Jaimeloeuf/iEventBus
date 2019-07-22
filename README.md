# iEventBus
This **front-end** package provides you with a EventBus factory function (that acts more or less like a Class in this case), to create isolated event bus messaging systems, where a "event bus" is a channel of communication using events between different components for all sorts of reasons from doing Reactive programming to simple data synchronization. Effectively bringing namespacing to event communication channels on the web's front-end.  

This package is created despite having DOM events already, because its hard to isolate these events into different/seperate channels, and to manage them seperately is a nightmare for developers. What's more frustrating is that when you have duplicate events from different components which makes the whole process more difficult. Thus this package is created to make life easier.  


## Project status
This project follows [Semantic Versioning](https://semver.org/)
- MAJOR version updates means incompatible API changes.
- MINOR version updates means added functionality or change of implementation in a backwards-compatible manner.
- PATCH version means bug fixes or minor updates that are backwards-compatible.

This project is currently actively maintained and is marked in Beta phase. Although this package is mostly stable and has been tested in 1 production level code, it is stilled marked as Beta since the unit tests have no been completed yet. Once all the tests has been written and a CI/CD pipeline is built out for this package, I will create a new Major version for release that will be marked as "Production Ready". If you have any issues, please open them on the Github page, contributions or comments are all welcomed too. My email is [here](mailto:jaimeloeuf@gmail.com) if you would like to reach out. Thanks for giving this a try!

Please view the documentation of latest changes in this [CHANGELOG.md](https://github.com/Jaimeloeuf/iEventBus/blob/master/CHANGELOG.md) file on the Github repository to see what has changed in the latest versions!  
Please visit the Github [repo](https://github.com/Jaimeloeuf/iEventBus) for latest and most updated commits/changes. Versions published on NPM are more or less stable for use and are not updated as often as the remote repo.  
If you plan on using this package in production, or share code that uses this package as dependency with others, always make sure that your code is working fine with the package using your tests, before locking the version you used in your dependency list. This is to prevent the package from being updated causing errors due to any possible breaking changes across the different versions, which may break your application, causing pain and tears.


## Installation & Pre-requisites & Dependencies
### Installation
Installing with "npm" is easy:
```cli
npm i ieventbus
```

You can also choose to install from source:
```cli
// Clone the repository from Github
git clone https://github.com/Jaimeloeuf/iEventBus

// Navigate to the directory cloned into
cd iEventBus

// Install package locally into the same directory
npm i .

// Install package globally
npm i -g .
```

### Pre-requisites & Platforms
Browser coverage -> Only tested on chrome >= v75.0.0.  
This package should however, work with majority of browsers with no issues, as it is essentially a nice and simple wrapper over the standard browser based DOM events API.

### Dependencies
This package does not have any external dependencies other than the DOM provided by the Browser.


## Licensing, Contributing and Author
This package is made under the MIT license, feel free to use it however you like.  
Feel free to fork and contribute to this project! If you need help or have any queries, feel free to reach out to me [here](mailto:jaimeloeuf@gmail.com), or simply create an issue on the Github page.  
2019 - [Jaime Loeuf](https://github.com/Jaimeloeuf)