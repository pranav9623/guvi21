function foo() {
  setTimeout(() => {
    document.getElementById("main").innerHTML = "10";

    setTimeout(() => {
      document.getElementById("main").innerHTML = "09";
      setTimeout(() => {
        document.getElementById("main").innerHTML = "08";
        setTimeout(() => {
          document.getElementById("main").innerHTML = "07";

          setTimeout(() => {
            document.getElementById("main").innerHTML = "06";

            setTimeout(() => {
              document.getElementById("main").innerHTML = "05";
              setTimeout(() => {
                document.getElementById("main").innerHTML = "04";

                setTimeout(() => {
                  document.getElementById("main").innerHTML = "03";

                  setTimeout(() => {
                    document.getElementById("main").innerHTML = "02";

                    setTimeout(() => {
                      document.getElementById("main").innerHTML = "01";

                      setTimeout(() => {
                        document.getElementById("main").innerHTML =
                          "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 0);
}

foo();
