
// creating a class to handle the player input via obsever pattern
class inputManager {
    observer = []

    subscribe(fn){
        this.observer.push(fn)
    }

}