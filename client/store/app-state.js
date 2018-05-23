import {
    observable,
    computed,
    action
} from 'mobx';

export class AppState {
    @observable count = 0
    @observable name = 'chenjian'
    @computed get msg(){
        return `${this.name} say this count is ${this.count}`
    }
    @action changeName(name){
        this.name = name;
    }
}

const appState = new AppState();

export default appState;