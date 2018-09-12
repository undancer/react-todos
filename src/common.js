import React from "react";

const objectWithOnly = (object, attrs) => {
    let newObject = {};
    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });
    return newObject;
};

const wrapChildrenWith = (children, props) => {
    return React.Children.map(children, child => React.cloneElement(child, props), null);
};


const stringInclues = (str, substr) => {
    return str.indexOf(substr) !== -1;
}

export {objectWithOnly, wrapChildrenWith, stringInclues};
