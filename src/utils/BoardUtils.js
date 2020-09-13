export const generateTitle = (id, options, defaultTitle) => {
  let title = defaultTitle;
  options.find((opt) => {
    if (id !== null && id === opt.id) {
      title = opt.title;
    }
  });
  return title;
};

export const getOptionName = (optionList) => {
  let name = [];
  if (optionList && optionList.length !== 0) {
    optionList.filter((opt) =>
      opt.name ? name.push(opt.name) : name.push(opt.u_name)
    );
  }
  return name;
};
