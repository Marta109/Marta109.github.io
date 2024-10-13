const validateTagName = (tagName) => {
  const regex = /[^a-z]/;
  if (regex.test(tagName)) {
    return !regex.test(tagName);
  }

  const element = document.createElement(tagName);
  return !(element instanceof HTMLUnknownElement);
};

const validAttribute = (attrName) => {
  const validAttributes = [
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
  ];
  return validAttributes.includes(attrName);
};

const UI = {
  createElement(tagName, attributes, children) {
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
          // newElem.textContent = child;
        } else {
          newElem.appendChild(child);
        }
      }
    } else if (typeof children === 'string') {
      newElem.append(children);
      // newElem.textContent = children;
    } else if (children) {
      newElem.appendChild(children);
    }

    return newElem;
  },

  render(element, parent) {
    if (!(parent instanceof HTMLElement)) {
      console.log(parent);
      throw new Error(`Invalid parent element for render!`);
    }
    if (!(element instanceof HTMLElement)) {
      throw new Error(`Invalid parent element for render!`);
    }

    parent.append(element);
  },
};

window.UI;
