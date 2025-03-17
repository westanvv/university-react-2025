export const log = ({data, title, color = '#D9BD2A'}: {data?: any; title: string; color?: string}) => {
  if (!data) {
    console.log(`%c ${title}`, `color: ${color};`);
  } else {
    console.groupCollapsed(`%c${title}`, `color: ${color};`);
    Object.keys(data).forEach(key => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.log(`%c${key}`, `color: #9E9E9E;`, data[key]);
    });
    console.groupEnd();
  }
};
