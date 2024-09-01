export const transformer = (val, pageNumber) => {
  return (
    val && {
      page: `page${pageNumber}`,
      widgets:
        val &&
        val.parentWidgets &&
        val.parentWidgets.map(
          (m) =>
            m &&
            m.parentProperties && {
              widget: m.parentDropdown,
              configuration: Object.keys(m.parentProperties).map((f, i) => ({
                Property: f,
                Value: Object.values(m.parentProperties)[i],
              })),
              children: m.childWidgets
                ? m.childWidgets.map(
                    (child) =>
                      child && {
                        widget: child.childDropdown,
                        configuration:
                          child.childProperties &&
                          Object.keys(child.childProperties).map((f, i) => ({
                            Property: f,
                            Value: Object.values(child.childProperties)[i],
                          })),
                      }
                  )
                : [],
            }
        ),
    }
  );
};
