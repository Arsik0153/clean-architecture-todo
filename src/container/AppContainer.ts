import Container from 'framework/Container';
import ContainerFactory from 'framework/ContainerFactory';
// repository
import SerializableRepository from 'framework/SerializableRepository';
import AppRepository from 'domain/repository/app/AppRepository';
import ExampleRepository from 'domain/repository/example/ExampleRepository';
import TodoRepository from "domain/repository/todo/TodoRepository";
// implementation
import AppRepositoryImpl from 'data/driver/app/AppRepositoryImpl';
import ExampleRepositoryImpl from 'data/driver/example/ExampleRepositoryImpl';
import TodoRepositoryImpl from "../data/driver/todo/TodoRepositoryImpl";
// api client
import ApiClient from 'data/driver/ApiClient';
import AbstractApiClient from 'data/AbstractApiClient';

class AppContainer extends Container {
    /**
     * Returns object to be serialized & hydrated
     * */
    protected getData(): Record<string, SerializableRepository> {
        return {
            exampleRepository: this.get(ExampleRepository),
            todoRepository: this.get(TodoRepository),
        };
    }

    /**
     * Binds abstract classes to its implementation
     * */
    protected bindAll() {
        this.bind(AbstractApiClient).to(ApiClient);
        this.bind(AppRepository).to(AppRepositoryImpl);
        this.bind(ExampleRepository).to(ExampleRepositoryImpl);
        this.bind(TodoRepository).to(TodoRepositoryImpl);
    }
}

const appContainerFactory = new ContainerFactory(AppContainer);

export type ContainerT = ReturnType<typeof appContainerFactory.getInstance>;

export default appContainerFactory;
