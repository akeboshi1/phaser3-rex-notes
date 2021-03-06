var Add = function(gameObject) {
    this.setParent(gameObject);
    gameObject.on('destroy', this.remove, this);
    this.children.add(gameObject);

    this
        .resetChildState(gameObject)           // Reset local state of child
        .updateChildVisible(gameObject)        // Apply parent's visible to child
        .updateChildActive(gameObject)         // Apply parent's active to child
        .updateChildScrollFactor(gameObject)   // Apply parent's scroll factor to child
        .updateChildMask(gameObject);          // Apply parent's mask to child
    return this;
}

export default {
    add(gameObject) {
        if (Array.isArray(gameObject)) {
            this.addMultiple(gameObject);
        } else {
            Add.call(this, gameObject);
        }
        return this;
    },

    addMultiple(gameObjects) {
        for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
            Add.call(this, gameObjects[i]);
        }
        return this;
    }
};