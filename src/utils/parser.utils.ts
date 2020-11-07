const parser = (object: object, parentNames: Array<string> = []): string => {
    return Object.keys(object)
      .map((key) => {
        if (typeof object[key] === 'object') {
          return parser(object[key], [...parentNames, key]);
        }
  
        if (parentNames.length > 0) {
          const prefix = parentNames.map((name) => `${name}[`).join('');
          const suffix = parentNames.map(() => ']').join('');
          return `${prefix}${key}${suffix}=${object[key]}`;
        }
  
        return `${key}=${object[key]}`;
      })
      .join('&');
  };

export default parser