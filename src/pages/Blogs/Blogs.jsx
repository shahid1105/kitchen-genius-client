import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const Blogs = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <>
      <div className="pt-24">
        <div>
          {/* <h1 className="banner">Blog</h1> */}
          <div className="mx-48">
            <h1 className="text-center mt-10 text-[#9ca2ea] text-4xl">
              Questions And Answers
            </h1>

            <div className="mt-10 ps-10">
              <Document>
                <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text>
                      <section>
                        <h1 className="font-bold text-[#6e79f2]">
                          Q:1-Tell us the differences between uncontrolled and
                          controlled components.
                        </h1>
                        <p className="text-[gray]">
                          In React, controlled components refer to components
                          that have their state and behavior controlled by the
                          parent component. These components rely on props
                          passed down from the parent component to update their
                          state and behavior. Uncontrolled components refer to
                          components that manage their own state internally.
                        </p>
                      </section>
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text>
                      <section>
                        <h1 className="font-bold mt-8 text-[#6e79f2]">
                          Q:2-How to validate React props using PropTypes?
                        </h1>
                        <p className="text-[gray]">
                          1.any : The prop can be of any data type.
                          <br />
                          2.bool : The prop should be a Boolean.
                          <br />
                          3 number : The prop should be a number.
                          <br />
                          4 string : The prop should be a string.
                          <br />
                          5 func : The prop should be a function.
                          <br />
                          6 array : The prop should be an array.
                          <br />
                          object : The prop should be an object.
                        </p>
                      </section>
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text>
                      <section>
                        <h1 className="font-bold mt-8 text-[#6e79f2]">
                          Q:3-Tell us the difference between nodejs and express
                          js.?
                        </h1>
                        <p className="text-[gray]">
                          NodeJS is a javascript runtime environment for running
                          JavaScript programs and is used to build server-side
                          applications. ExpressJS is a web framework that
                          enables you to design a web application to handle a
                          variety of different HTTP demands. You can use NodeJS
                          to build a multi-user, real-time web service.
                        </p>
                      </section>
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text>
                      <section>
                        <h1 className="font-bold mt-8 text-[#6e79f2]">
                          Q:4-What is a custom hook, and why will you create a
                          custom hook?
                        </h1>
                        <p className="text-[gray]">
                          Custom React JS hooks offer reusability as when a
                          custom hook is created, it can be reused easily, which
                          ensures clean code and reduces the time to write the
                          code. It also enhances the rendering speed of the code
                          as a custom hook does not need to be rendered again
                          and again while rendering the whole code.
                        </p>
                      </section>
                    </Text>
                  </View>
                </Page>
              </Document>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
