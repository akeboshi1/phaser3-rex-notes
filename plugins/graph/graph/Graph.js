import EdgeMethods from './EdgeMethods.js';
import VertexMethods from './VertexMethods.js';
import GetObjUID from '../obj/GetObjUID.js';

class Graph {
    constructor(scene) {
        this.scene = scene;
        this.vertices = {}; // {vertex: {edge:true, ...} }
        this.edges = {}; // {edge: {vA:vertex, vB:vertex, dir:1,2,3} }
    }

    exists(gameObject) {
        return this.isEdge(gameObject) || this.isVertex(gameObject);
    }

    remove(gameObject) {
        if (this.isEdge(gameObject)) {
            this.removeEdge(gameObject);
        } else if (this.isVertex(gameObject)) {
            this.removeVertex(gameObject);
        }
        return this;
    }

    clear(destroy) {
        this.removeAllVertices(destroy);
        return this;
    }

    getObjUID(gameObject) {
        return GetObjUID(gameObject);
    }
}

Object.assign(
    Graph.prototype,
    EdgeMethods,
    VertexMethods
);

export default Graph;