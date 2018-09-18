import * as React from "react";

const objectWithOnly = (object: any, attrs: any) => {
    let newObject = {};
    attrs.forEach((attr: any) => {
        newObject[attr] = object[attr].bind(object);
    });
    return newObject;
};

const wrapChildrenWith = (children: any, props: any) => {
    return React.Children.map(children, (child: any) => React.cloneElement(child, props));
};


const stringInclues = (str: string, substr: string) => {
    return str.indexOf(substr) !== -1;
};

export {objectWithOnly, wrapChildrenWith, stringInclues};
