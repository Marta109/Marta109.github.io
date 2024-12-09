const validateTagName = (tagName) => {
  const regex = /[^a-z]/;
  if (regex.test(tagName)) {
    return !regex.test(tagName);
  }

  const element = document.createElement(tagName);
  return !(element instanceof HTMLUnknownElement);
};

const validAttribute = (attrName) => {
  const validAttributes = new Set([
    'id',
    'class',
    'style',
    'href',
    'src',
    'type',
    'required',
    'placeholder',
    'value',
    'name',
    'for',
    'alt',
    'data-mdb-input-init',
    'data-mdb-button-init',
    'data-mdb-ripple-init',
    'h5',
    'checked',
    'disabled',
  ]);
  return validAttributes.has(attrName);
};

const createElement = (tagName, attributes, children) => {
  if (!validateTagName(tagName)) {
    throw new Error(`Invalid element type: ${tagName}!!!!`);
  }

  const newElem = document.createElement(tagName);

  for (const key in attributes) {
    if (!validAttribute(key)) {
      throw new Error(`Invalid attribute name: ${key}`);
    }
    newElem.setAttribute(key, attributes[key]);
  }

  if (children && Array.isArray(children)) {
    for (const child of children) {
      if (typeof child === 'string') {
        newElem.append(child);
      } else {
        newElem.appendChild(child);
      }
    }
  } else if (typeof children === 'string') {
    newElem.append(children);
  } else if (children) {
    newElem.appendChild(children);
  }

  return newElem;
};

const render = (element, parent) => {
  if (!(parent instanceof HTMLElement)) {
    console.log(parent);
    throw new Error(`Invalid parent element for render!`);
  }
  if (!(element instanceof HTMLElement)) {
    throw new Error(`Invalid parent element for render!`);
  }

  parent.append(element);
};

const UI = {
  createElement,
  render,
};

export default UI;
