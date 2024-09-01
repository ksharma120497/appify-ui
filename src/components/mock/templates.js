export const template1 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "210",
          left: "80",
          height: "400",
          width: "280",
          decoration: "2,5,b7b7a4,2,UserName",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          left: "80",
          height: "400",
          width: "280",
          decoration: "2,5,b7b7a4,2,Password",
          top: "320",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "500",
          left: "60",
          height: "50",
          width: "320",
          color: "#f396e2",
          highlightColor: "#7ae6a0",
          elevation: "10",
          onPressed: "page2",
          text: "LOGIN",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "460",
          left: "150",
          height: "50",
          width: "345",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Forgot Password",
              style: "13,bold,03045e",
            },
          },
        ],
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "460",
          height: "50",
          width: "345",
          textAlign: "center",
          left: "-30",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "New Here ? Please SignUp",
              style: "13,bold,03045e",
            },
          },
        ],
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "215",
          left: "35",
          height: "50",
          width: "50",
          icon: "account_circle",
          color: "#4b4444",
          size: "30",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "325",
          left: "35",
          height: "50",
          width: "50",
          icon: "lock",
          color: "#4b4444",
          size: "30",
        },
      },
      {
        parentDropdown: "Divider",
        parentProperties: {
          top: "540",
          left: "70",
          height: "80",
          width: "120",
          color: "#1e0656",
          thickness: "5",
        },
      },
      {
        parentDropdown: "Divider",
        parentProperties: {
          top: "540",
          height: "80",
          width: "130",
          color: "#1e0656",
          thickness: "5",
          left: "240",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "570",
          left: "205",
          height: "80",
          width: "130",
          textValue: "OR",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "605",
          left: "130",
          height: "45",
          width: "180",
          text: "Login with Facebook",
          color: "#f396e2",
          highlightColor: "#7ae6a0",
          onPressed: "page2",
          elevation: "10",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "105",
          left: "90",
          height: "300",
          width: "350",
          textValue: "WELCOME BACK USER",
          style: "25,bold,03071e",
        },
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "TabBar",
        parentProperties: {
          indicatorWeight: "5",
          indicatorColor: "#0a234d",
          unselectedLabelStyle: "10,bold,0a234d",
          labelPadding: "10",
        },
        childWidgets: [
          {
            childDropdown: "TabBarView",
            childProperties: {
              pageName: "page3,page4",
            },
          },
          {
            childDropdown: "Tab",
            childProperties: {
              icon: "description",
              text: "India",
            },
          },
          {
            childDropdown: "Tab",
            childProperties: {
              icon: "description",
              text: "International",
            },
          },
        ],
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "10",
          left: "10",
          height: "70",
          width: "400",
          title: "Business",
          leading: "business",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "90",
          left: "10",
          height: "70",
          width: "400",
          title: "Education",
          leading: "book",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "170",
          left: "10",
          height: "70",
          width: "400",
          title: "Politics",
          leading: "supervisor_account",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "250",
          left: "10",
          height: "70",
          width: "400",
          title: "Environment",
          onTap: "page1",
          trailing: "arrow_forward_ios",
          leading: "nature",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "330",
          left: "10",
          height: "70",
          width: "400",
          title: "Science and Tech.",
          leading: "computer",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "410",
          left: "10",
          height: "70",
          width: "400",
          title: "Entertainment",
          leading: "beach_access",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "490",
          left: "10",
          height: "70",
          width: "400",
          title: "Sports",
          onTap: "page1",
          trailing: "arrow_forward_ios",
          leading: "accessibility_new",
        },
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "10",
          left: "10",
          height: "70",
          width: "400",
          title: "Business",
          leading: "business",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "90",
          left: "10",
          height: "70",
          width: "400",
          title: "Education",
          leading: "book",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "170",
          left: "10",
          height: "70",
          width: "400",
          title: "Politics",
          leading: "supervisor_account",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "250",
          left: "10",
          height: "70",
          width: "400",
          title: "Environment",
          onTap: "page1",
          trailing: "arrow_forward_ios",
          leading: "nature",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "330",
          left: "10",
          height: "70",
          width: "400",
          title: "Science and Tech.",
          leading: "computer",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "410",
          left: "10",
          height: "70",
          width: "400",
          title: "Entertainment",
          leading: "beach_access",
          onTap: "page1",
          trailing: "arrow_forward_ios",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "490",
          left: "10",
          height: "70",
          width: "400",
          title: "Sports",
          onTap: "page1",
          trailing: "arrow_forward_ios",
          leading: "accessibility_new",
        },
      },
    ],
    order: 4,
  },
};

export const template2 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Login To Continue",
          style: "13,bold,084c61",
          textAlign: "center",
          textDirection: "ltr",
          top: "350",
          left: "00",
          height: "40",
          width: "300",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "120",
          left: "30",
          height: "500",
          width: "380",
          shape: "eac2d6,1,30",
          color: "#f7d6e0",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "130",
          height: "80",
          width: "190",
          top: "150",
          textValue: "Login Here",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "2",
          style: "16,bold,023e7d",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          left: "40",
          decoration: "10,10,672dbe,10,Enter Username",
          top: "250",
          height: "80",
          width: "360",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "330",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Password",
        },
      },
      {
        parentDropdown: "CheckBox",
        parentProperties: {
          top: "400",
          left: "250",
          height: "30",
          width: "30",
          activeColor: "#f28482",
          checkColor: "#672dbe",
          parameter: "hee",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "267",
          height: "120",
          width: "120",
          textValue: "Remember Me",
          style: "15,normal,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
          top: "406",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "450",
          left: "80",
          height: "50",
          width: "270",
          color: "#023e7d",
          shape: "ccff33,1,30",
          text: "Submit",
          onPressed: "page2",
          textColor: "#d8e2dc",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "520",
          left: "80",
          height: "50",
          width: "270",
          color: "#023e7d",
          shape: "ccff33,1,30",
          onPressed: "page1",
          text: "Login with Facebook ",
          textColor: "#d8e2dc",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "230",
          height: "120",
          width: "170",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,000000",
              textName: "New Here ? ",
            },
          },
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,000000",
              textName: "Sign Up !",
            },
          },
        ],
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "50",
          height: "120",
          width: "120",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Forgot Password ?",
              style: "14,bold,000000",
            },
          },
        ],
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "BottomNavigationBar",
        parentProperties: {
          type: "fixed",
          unselectedItemColor: "#0a1128",
          selectedItemColor: "#e63946",
          pageNames: "page3,page5,page1",
          iconSize: "40",
          elevation: "5",
        },
        childWidgets: [
          {
            childDropdown: "BottomNavigationBarItem",
            childProperties: {
              Icon: "home",
              title: ".",
            },
          },
          {
            childDropdown: "BottomNavigationBarItem",
            childProperties: {
              Icon: "shopping_cart",
              title: " .",
            },
          },
          {
            childDropdown: "BottomNavigationBarItem",
            childProperties: {
              Icon: "person",
              title: " .",
            },
          },
        ],
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "My Store",
          top: "45",
          left: "10",
          height: "50",
          width: "150",
          style: "15,bold,000000",
          textScaleFactor: "2",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "15",
          left: "340",
          height: "18",
          width: "20",
          icon: "search",
          size: "30",
          color: "#e63946",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "15",
          left: "390",
          height: "18",
          width: "20",
          icon: "notifications",
          size: "30",
          color: "#e63946",
        },
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          top: "150",
          left: "10",
          height: "200",
          width: "410",
          color: "#ffcdb2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "110",
          left: "20",
          height: "60",
          width: "170",
          textValue: "Categories:",
          style: "29,bold,e63946",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "220",
          left: "60",
          height: "50",
          width: "100",
          style: "15,bold,e63946",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
          textValue: "Mobiles",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "220",
          left: "280",
          height: "50",
          width: "100",
          style: "15,bold,e63946",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
          textValue: "Electronics",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "320",
          left: "60",
          height: "50",
          width: "100",
          style: "15,bold,e63946",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
          textValue: "HeadPhones",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "320",
          left: "280",
          height: "50",
          width: "100",
          style: "15,bold,e63946",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
          textValue: "Appliances",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "170",
          left: "60",
          icon: "tablet_android",
          width: "100",
          height: "50",
          color: "#e63946",
          iconSize: "30",
          onPressed: "page4",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "170",
          left: "280",
          icon: "laptop_chromebook",
          width: "100",
          height: "50",
          color: "#e63946",
          iconSize: "30",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "270",
          left: "280",
          icon: "tv_sharp",
          width: "100",
          height: "50",
          color: "#e63946",
          iconSize: "30",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "270",
          left: "60",
          icon: "headset",
          width: "100",
          height: "50",
          color: "#e63946",
          iconSize: "30",
          onPressed: "page4",
        },
      },
      {
        parentDropdown: "ListView",
        parentProperties: {
          top: "350",
          left: "10",
          height: "400",
          width: "420",
          padding: "20",
          scrollDirection: "vertical",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://hotdealszone.com/wp-content/uploads/2019/10/Amazon-Sale-home-kitcehn-products-offers-1024x725.jpg",
              imageHeight: "200",
              imageWidth: "410",
              fit: "fill",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://i.pinimg.com/originals/b3/9a/97/b39a9719c8f1ba84bb2a605488e17750.jpg",
              imageHeight: "200",
              imageWidth: "410",
              fit: "fill",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "200",
              imageWidth: "410",
              url:
                "https://localbusinessau.org/wp-content/uploads/2019/04/ELECTRONICS-Twitter-1-1024x512.jpg",
              fit: "fill",
            },
          },
        ],
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "My Store",
          top: "45",
          left: "10",
          height: "50",
          width: "150",
          style: "15,bold,000000",
          textScaleFactor: "2",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "15",
          left: "340",
          height: "18",
          width: "20",
          icon: "search",
          size: "30",
          color: "#e63946",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "15",
          left: "390",
          height: "18",
          width: "20",
          icon: "notifications",
          size: "30",
          color: "#e63946",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "120",
          left: "10",
          height: "300",
          width: "200",
          color: "#d8e2dc",
          onTap: "page5",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://specs-tech.com/wp-content/uploads/2020/07/Samsung-Galaxy-M31s.jpg",
              imageHeight: "240",
              imageWidth: "310",
              fit: "fill",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Samsung M31s",
              style: "15,bold,2b2d42",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Price : \\$55 ",
              style: "15,bold,2b2d42",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "120",
          left: "220",
          height: "300",
          width: "200",
          color: "#d8e2dc",
          onTap: "page4",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "240",
              imageWidth: "310",
              fit: "fill",
              url:
                "https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SL1024_.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Iphone 11 Pro",
              style: "15,bold,2b2d42",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Price : \\$67 ",
              style: "15,bold,2b2d42",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "440",
          left: "220",
          height: "300",
          width: "200",
          color: "#d8e2dc",
          onTap: "page4",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "240",
              imageWidth: "310",
              fit: "fill",
              url:
                "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/i/m/img_1889.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "MI 9 Pro",
              style: "15,bold,2b2d42",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Price : \\$34",
              style: "15,bold,2b2d42",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "440",
          left: "10",
          height: "300",
          width: "200",
          color: "#d8e2dc",
          onTap: "page5",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "240",
              imageWidth: "310",
              fit: "fill",
              url:
                "https://lh3.googleusercontent.com/7ntqQDKnW34GzeXRHYCxPxeUa_zwxHXY6WG6y7iBgrFL_BokKjKMB-MMup17wS3BJnbRUanDzuvNCLCOvMH62HzEn028bA=w200-h300-c-n",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              style: "15,bold,2b2d42",
              textValue: "One Plus 8 Pro",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Price : \\$70",
              style: "15,bold,2b2d42",
            },
          },
        ],
      },
    ],
    order: 4,
  },
  Page5: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          top: "70",
          left: "150",
          height: "250",
          width: "200",
          fit: "fitHeight",
          imageHeight: "200",
          imageWidth: "300",
          url:
            "https://specs-tech.com/wp-content/uploads/2020/07/Samsung-Galaxy-M31s.jpg",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "330",
          left: "0",
          height: "600",
          width: "430",
          color: "#f8edeb",
          shape: "f8f9fa,1,20",
        },
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "320",
          left: "330",
          height: "50",
          width: "50",
          floatingIcon: "favorite_border",
          shape: "f8f9fa,1,30",
          onPressed: "page1",
          backgroundColor: "#e63946",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "350",
          left: "30",
          height: "70",
          width: "200",
          textValue: "Samsung M31s",
          style: "13,bold,e63946",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "20",
          width: "180",
          style: "20,bold,e63946",
          textAlign: "left",
          textDirection: "ltr",
          height: "180",
          textValue: "\\$55.00",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "448",
          left: "400",
          height: "20",
          width: "20",
          icon: "star",
          color: "#e63946",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "370",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
          height: "25",
          width: "35",
          textValue: " 4.4*",
          style: "20,bold,2b2d42",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "500",
          left: "20",
          height: "30",
          width: "30",
          color: "#2b9348",
          shape: "8f9fa6,1,20",
          onPressed: "page3",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "500",
          left: "70",
          height: "30",
          width: "30",
          color: "#212529",
          shape: "8f9fa6,1,20",
          onPressed: "page3",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "500",
          left: "120",
          height: "30",
          width: "30",
          color: "#3a86ff",
          shape: "8f9fa6,1,20",
          onPressed: "page3",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "700",
          height: "60",
          width: "70",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "20",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "arrow_back_ios",
              onPressed: "page2",
              splashColor: "#e63946",
            },
          },
        ],
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "705",
          left: "120",
          height: "50",
          width: "270",
          color: "#e63946",
          text: "Add to Cart",
          shape: "e63946,1,20",
          onPressed: "page3",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "600",
          left: "20",
          height: "200",
          width: "400",
          textValue:
            "The Samsung Galaxy M31 managed to make a good impact in the budget segment thanks to its crisp AMOLED display and a big battery, which helped distinguish it from the competition.",
          style: "17,normal,2b2d42",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
    ],
    order: 5,
  },
};

export const template3 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Container",
        parentProperties: {
          top: "0",
          left: "0",
          height: "1000",
          width: "700",
          color: "#90e0ef",
        },
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          top: "200",
          left: "50",
          height: "540",
          width: "330",
          color: "#feeafa",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "80",
          left: "80",
          height: "60",
          width: "230",
          textValue: "Sign Up",
          style: "23,bold,e71d36",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "60",
          width: "200",
          textValue: "Today!",
          style: "15,bold,e71d36",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "2",
          top: "135",
          left: "100",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "40",
          textValue: "Create a new Account",
          style: "13,bold,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "2",
          top: "270",
          left: "60",
          width: "300",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "320",
          left: "80",
          height: "70",
          width: "280",
          decoration: "10,10,672dbe,40,Enter UserName",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          left: "80",
          height: "70",
          width: "280",
          decoration: "10,10,672dbe,40,Enter Password",
          top: "400",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "480",
          left: "80",
          height: "70",
          width: "280",
          decoration: "10,10,672dbe,40,Confirm Password",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "310",
          left: "310",
          height: "80",
          width: "20",
          icon: "person",
          color: "#293241",
          size: "30",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "390",
          left: "310",
          height: "80",
          width: "20",
          icon: "lock",
          color: "#293241",
          size: "30",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          left: "310",
          height: "80",
          width: "20",
          icon: "lock",
          color: "#293241",
          size: "30",
          top: "470",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "580",
          left: "80",
          height: "50",
          width: "250",
          color: "#e63946",
          shape: "b8b08d,1,30",
          text: "submit",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "640",
          left: "80",
          height: "50",
          width: "250",
          color: "#e63946",
          shape: "b8b08d,1,30",
          onPressed: "page2",
          text: "Login with Facebook",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "150",
          height: "120",
          width: "170",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Already a Member?",
              style: "14,bold,000000",
            },
          },
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Login!",
              style: "14,bold,000000",
            },
          },
        ],
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "Welcome",
          primary: "true",
          leading: "arrow_back",
          backgroundColor: "#5390d9",
        },
        childWidgets: [
          {
            childDropdown: "Icon",
            childProperties: {
              icon: "person",
              size: "30",
            },
          },
        ],
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          top: "0",
          left: "0",
          height: "1000",
          width: "700",
          color: "#90e0ef",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "80",
          left: "80",
          height: "50",
          width: "400",
          textValue: " Explore your Deals",
          style: "25,normal,000000",
        },
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          height: "350",
          color: "#feeafa",
          top: "150",
          left: "500",
          width: "350",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "200",
          left: "270",
          height: "50",
          width: "80",
          iconSize: "60",
          color: "#e63946",
          onPressed: "page3",
          icon: "train",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "60",
          textValue: "Flight",
          style: "20,normal,e63946",
          width: "170",
          top: "290",
          left: "100",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "170",
          textValue: "Train",
          style: "20,normal,e63946",
          top: "290",
          left: "290",
          width: "170",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "60",
          textValue: "Bus",
          style: "20,normal,e63946",
          width: "170",
          top: "560",
          left: "100",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "60",
          textValue: "Flight",
          style: "20,normal,e63946",
          top: "560",
          width: "170",
          left: "290",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "200",
          left: "80",
          height: "50",
          width: "80",
          iconSize: "60",
          color: "#e63946",
          onPressed: "page3",
          icon: "flight_takeoff",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          left: "80",
          height: "50",
          width: "80",
          iconSize: "60",
          color: "#e63946",
          onPressed: "page3",
          top: "470",
          icon: "directions_bus",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "470",
          left: "270",
          height: "50",
          width: "80",
          iconSize: "60",
          color: "#e63946",
          onPressed: "page1",
          icon: "directions_car",
        },
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "Welcome",
          primary: "true",
          leading: "arrow_back",
          backgroundColor: "#5390d9",
        },
        childWidgets: [
          {
            childDropdown: "Icon",
            childProperties: {
              icon: "person",
              size: "30",
            },
          },
        ],
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          top: "0",
          left: "0",
          height: "1000",
          width: "700",
          color: "#90e0ef",
        },
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          color: "#edf6f9",
          top: "50",
          left: "30",
          height: "240",
          width: "360",
        },
      },

      {
        parentDropdown: "RadioListTile",
        parentProperties: {
          top: "50",
          left: "50",
          height: "50",
          width: "300",
          title: "Round Trip",
          parameter: "val",
          activeColor: "#581919",
        },
      },
      {
        parentDropdown: "RadioListTile",
        parentProperties: {
          top: "50",
          left: "200",
          height: "50",
          width: "300",
          title: "One Way",
          parameter: "val2",
          activeColor: "#581919",
        },
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          color: "#edf6f9",
          top: "300",
          left: "30",
          height: "240",
          width: "360",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Departure From",
          top: "140",
          left: "100",
          height: "120",
          width: "170",
          style: "17,normal,e63946",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Arrival To",
          top: "210",
          left: "100",
          height: "120",
          width: "170",
          style: "17,normal,e63946",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Departure ",
          left: "50",
          height: "120",
          width: "170",
          style: "17,normal,e63946",
          top: "320",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Arrival",
          height: "120",
          width: "170",
          style: "17,normal,e63946",
          top: "320",
          left: "250",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Passenger",
          height: "120",
          width: "170",
          style: "17,normal,e63946",
          top: "440",
          left: "60",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "120",
          width: "170",
          style: "17,normal,e63946",
          top: "440",
          left: "250",
          textValue: "Children",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "600",
          left: "130",
          color: "#e63946",
          height: "50",
          width: "170",
          text: "Submit",
          onPressed: "page4",
          shape: "b8b08d,1,30",
        },
      },
      {
        parentDropdown: "DropdownButton",
        parentProperties: {
          height: "50",
          width: "100",
          Icon: "keyboard_arrow_down",
          parameterName: "abo",
          paramValue: "4",
          iconSize: "14",
          isDense: "false",
          autofocus: "false",
          isExpanded: "false",
          left: "60",
          top: "460",
        },
        childWidgets: [
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "1",
              text: "1 Adult",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "2",
              text: "2 Adult",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "3 Adult",
              value: "3",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "4",
              text: "4 adult",
            },
          },
        ],
      }, {
        parentDropdown: "DropdownButton",
        parentProperties: {
          top: "340",
          left: "60",
          height: "50",
          width: "100",
          Icon: "keyboard_arrow_down",
          parameterName: "abu",
          paramValue: "4",
          iconSize: "14",
          isDense: "false",
          autofocus: "false",
          isExpanded: "false",
        },
        childWidgets: [
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "Wed, 17Dec",
              value: "1",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "Thu, 18Dec",
              value: "2",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "Fri, 19Dec",
              value: "3",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "4",
              text: "Sat, 20Dec",
            },
          },
        ],
      },
      {
        parentDropdown: "DropdownButton",
        parentProperties: {
          top: "160",
          height: "50",
          width: "100",
          Icon: "keyboard_arrow_down",
          parameterName: "abh",
          paramValue: "4",
          iconSize: "14",
          isDense: "false",
          autofocus: "false",
          isExpanded: "false",
          left: "115",
        },
        childWidgets: [
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "1",
              text: "Bangalore",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "2",
              text: "Mumbai",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "Goa",
              value: "3",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "4",
              text: "Chennai",
            },
          },
        ],
      },
      {
        parentDropdown: "DropdownButton",
        parentProperties: {
          top: "230",
          height: "50",
          width: "100",
          Icon: "keyboard_arrow_down",
          parameterName: "abs",
          paramValue: "4",
          iconSize: "14",
          isDense: "false",
          autofocus: "false",
          isExpanded: "false",
          left: "115",
        },
        childWidgets: [
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "1",
              text: "Hyderabad",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "2",
              text: "Mumbai",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "Goa",
              value: "3",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "4",
              text: "Chennai",
            },
          },
        ],
      },
      {
        parentDropdown: "DropdownButton",
        parentProperties: {
          height: "50",
          width: "100",
          Icon: "keyboard_arrow_down",
          parameterName: "abc",
          paramValue: "4",
          iconSize: "14",
          isDense: "false",
          autofocus: "false",
          isExpanded: "false",
          left: "260",
          top: "460",
        },
        childWidgets: [
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "1",
              text: "1 Children",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "2",
              text: "2 Children",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "3 Children",
              value: "3",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "4",
              text: "4 Children",
            },
          },
        ],
      },
      {
        parentDropdown: "DropdownButton",
        parentProperties: {
          top: "340",
          left: "260",
          height: "50",
          width: "100",
          Icon: "keyboard_arrow_down",
          parameterName: "ab",
          paramValue: "4",
          iconSize: "14",
          isDense: "false",
          autofocus: "false",
          isExpanded: "false",
        },
        childWidgets: [
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              text: "Tue, 16Dec",
              value: "12",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "2",
              text: "Wed, 17Dec",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "3",
              text: "Thu, 18Dec",
            },
          },
          {
            childDropdown: "DropdownMenuItem",
            childProperties: {
              value: "4",
              text: "Fri, 19Dec",
            },
          },
        ],
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Container",
        parentProperties: {
          top: "0",
          left: "0",
          height: "1000",
          width: "700",
          color: "#90e0ef",
        },
      },
      {
        parentDropdown: "Container",
        parentProperties: {
          left: "50",
          color: "#feeafa",
          top: "200",
          height: "540",
          width: "330",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "250",
          left: "80",
          height: "400",
          width: "300",
          textValue: "Your Ticket is Submitted Successfully",
          style: "50,bold,e63946",
        },
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "600",
          left: "220",
          height: "100",
          width: "170",
          floatingIcon: "home",
          onPressed: "page2",
        },
      },
    ],
    order: 4,
  },
};

export const template4 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "0",
          left: "0",
          height: "850",
          width: "440",
          color: "#e8e8e8",
          elevation: "5",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "80",
          left: "40",
          height: "200",
          width: "200",
          textValue: "Login",
          style: "40,bold,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "150",
          left: "40",
          height: "200",
          width: "400",
          textValue: "Email or mobile phone number",
          style: "20,bold,000000",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "175",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,40, Email or phone number",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "260",
          left: "40",
          height: "200",
          width: "200",
          textValue: "Password",
          style: "20,bold,000000",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "260",
          left: "230",
          height: "200",
          width: "200",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Forgot Password ",
              style: "18,bold,3a86ff",
            },
          },
        ],
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "285",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,40, Password",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "370",
          left: "40",
          height: "55",
          width: "360",
          color: "#f77f00",
          text: "Login",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "CheckBox",
        parentProperties: {
          top: "450",
          left: "40",
          height: "40",
          width: "30",
          activeColor: "#f28482",
          checkColor: "#672dbe",
          parameter: "param12",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "460",
          left: "70",
          height: "40",
          width: "180",
          textValue: "Keep me signed in",
          style: "19,normal,000000",
        },
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "0",
          left: "0",
          height: "850",
          width: "440",
          color: "#e6e6e6",
          elevation: "5",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "150",
          left: "130",
          height: "200",
          width: "200",
          textValue: "MyPay",
          textAlign: "center",
          style: "30,bold,000000",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "25",
          left: "0",
          height: "100",
          width: "100",
          iconSize: "35",
          icon: "blur_circular",
          color: "#0f0f0f",
          onPressed: "page1",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "25",
          height: "100",
          width: "100",
          iconSize: "35",
          icon: "person_outline",
          color: "#0f0f0f",
          onPressed: "page1",
          left: "340",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "120",
          height: "100",
          width: "100",
          iconSize: "30",
          icon: "android",
          color: "#0f0f0f",
          onPressed: "page1",
          left: "110",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "250",
          height: "850",
          width: "450",
          color: "#ffffff",
          elevation: "5",
          left: "-10",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "270",
          left: "20",
          height: "100",
          width: "100",
          textValue: "People",
          textAlign: "center",
          style: "25,normal,000000",
        },
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "200",
          left: "20",
          height: "300",
          width: "400",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_circle",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "45",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_circle",
              iconSize: "40",
              color: "#0d0d0d",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "45",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_circle",
              iconSize: "40",
              color: "#0a0a0a",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "45",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_circle",
              iconSize: "40",
              color: "#0a0a0a",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "470",
          left: "20",
          height: "100",
          width: "150",
          textValue: "Promotions",
          textAlign: "center",
          style: "25,normal,000000",
        },
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "400",
          left: "20",
          height: "300",
          width: "400",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "local_bar",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "45",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "local_offer",
              iconSize: "40",
              color: "#0d0d0d",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "45",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "stars",
              iconSize: "40",
              color: "#0a0a0a",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "45",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "expand_more",
              iconSize: "40",
              color: "#0a0a0a",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "300",
          left: "30",
          height: "200",
          width: "400",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Papa",
              style: "18,normal,000000",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "65",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "MS",
              style: "18,normal,000000",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "65",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Aquib",
              style: "18,normal,000000",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "60",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Virat",
              style: "18,normal,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "500",
          left: "30",
          height: "200",
          width: "400",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Rewards",
              style: "18,normal,000000",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "30",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Offers",
              style: "18,normal,000000",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "35",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Referrals",
              style: "18,normal,000000",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "35",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Show more",
              style: "18,normal,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "700",
          left: "40",
          height: "40",
          width: "360",
          color: "#4361ee",
          text: "New Payment",
          onPressed: "page3",
          textColor: "#ffffff",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "690",
          left: "120",
          height: "40",
          width: "30",
          iconSize: "40",
          icon: "add",
          color: "#ffffff",
          onPressed: "page3",
        },
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "TabBar",
        parentProperties: {
          indicatorWeight: "5",
          indicatorSize: "label",
          labelStyle: "15,bold,ef476f",
          indicatorColor: "#ff6700",
        },
        childWidgets: [
          {
            childDropdown: "TabBarView",
            childProperties: {
              pageName: "page4,page5",
            },
          },
          {
            childDropdown: "Tab",
            childProperties: {
              icon: "people",
              text: "People&Bills",
              iconMargin: "5",
            },
          },
          {
            childDropdown: "Tab",
            childProperties: {
              text: "Businesses",
              icon: "business",
              iconMargin: "5",
            },
          },
        ],
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "70",
          left: "40",
          height: "100",
          width: "300",
          textValue: "Recharge and Pay Bills",
          style: "25,bold,000000",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "110",
          left: "10",
          height: "100",
          width: "100",
          iconSize: "30",
          icon: "mobile_screen_share",
          onPressed: "page1",
          color: "#0d0d0d",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "110",
          left: "200",
          height: "100",
          width: "100",
          iconSize: "30",
          icon: "payment",
          onPressed: "page1",
          color: "#0d0d0d",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "130",
          left: "100",
          height: "100",
          width: "150",
          textValue: "Mobile recharge",
          style: "22,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "130",
          left: "280",
          height: "100",
          width: "100",
          textValue: "Bill Payments",
          style: "22,normal,000000",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "210",
          left: "10",
          height: "100",
          width: "100",
          iconSize: "30",
          icon: "explore",
          onPressed: "page1",
          color: "#0d0d0d",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "245",
          left: "280",
          height: "100",
          width: "150",
          textValue: "Offers",
          style: "22,normal,000000",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "210",
          left: "200",
          height: "100",
          width: "100",
          iconSize: "30",
          icon: "local_offer",
          onPressed: "page1",
          color: "#0d0d0d",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "245",
          left: "100",
          height: "100",
          width: "150",
          textValue: "Explore",
          style: "22,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "350",
          left: "40",
          height: "100",
          width: "200",
          textValue: "Transfer Money",
          style: "25,bold,000000",
        },
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "350",
          left: "40",
          height: "150",
          width: "500",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_balance",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "40",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "phone",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "40",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "blur_linear",
              iconSize: "40",
              color: "#050505",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "40",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "people_outline",
              iconSize: "40",
              color: "#050505",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "40",
          height: "100",
          width: "100",
          textValue: "Bank transfer",
          style: "20,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "140",
          height: "100",
          width: "100",
          textValue: "Phone number",
          style: "20,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "235",
          height: "100",
          width: "60",
          textValue: "UPI ID or QR",
          style: "20,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "330",
          height: "100",
          width: "100",
          textValue: "Self transfer",
          style: "20,normal,000000",
        },
      },
    ],
    order: 4,
  },
  Page5: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "50",
          left: "30",
          height: "100",
          width: "200",
          textValue: "Trending",
          style: "40,bold,00171f",
        },
      },
      {
        parentDropdown: "Column",
        parentProperties: {
          top: "150",
          left: "20",
          height: "650",
          width: "100",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_balance",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "60",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "directions_bus",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "60",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "card_travel",
              iconSize: "40",
              color: "#0f0f0f",
              onPressed: "page1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "60",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              onPressed: "page1",
              color: "#0f0f0f",
              icon: "train",
              iconSize: "40",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "150",
          left: "100",
          height: "100",
          width: "180",
          textValue: "ICICI - FASTag",
          style: "24,normal,000000",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "150",
          left: "300",
          height: "100",
          width: "100",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Buy FASTag ",
              style: "18,bold,3a86ff",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "180",
          left: "100",
          height: "100",
          width: "230",
          textValue: "Cashless toll payments",
          style: "16,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "260",
          left: "100",
          height: "100",
          width: "180",
          textValue: "redBus",
          style: "24,normal,000000",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "260",
          left: "300",
          height: "100",
          width: "100",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Book buses ",
              style: "18,bold,3a86ff",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "300",
          left: "100",
          height: "100",
          width: "200",
          textValue: "Bus rides throughout India",
          style: "16,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "380",
          left: "100",
          height: "100",
          width: "180",
          textValue: "MakeMyTrip",
          style: "24,normal,000000",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "380",
          left: "300",
          height: "100",
          width: "100",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Book travel ",
              style: "18,bold,3a86ff",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "420",
          left: "100",
          height: "100",
          width: "200",
          textValue: "Flights throughout India",
          style: "16,normal,000000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "500",
          left: "100",
          height: "100",
          width: "100",
          textValue: "Trains",
          style: "24,normal,000000",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "500",
          left: "300",
          height: "100",
          width: "100",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Book travel ",
              style: "18,bold,3a86ff",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "540",
          left: "100",
          height: "100",
          width: "200",
          textValue: "Tickets with IRCTC",
          style: "16,normal,000000",
        },
      },
    ],
    order: 5,
  },
};

export const template5 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "ABC BANK",
          backgroundColor: "#7209b7",
          leading: "menu",
          centerTitle: "true",
          shadowColor: "#1d3557",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "power_settings_new",
              color: "#ffffff",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "60",
          height: "100",
          width: "200",
          textValue: "Welcome User!",
          top: "25",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "-16",
          left: "-70",
          height: "100",
          width: "200",
          icon: "account_circle",
          color: "#464444",
          size: "50",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "90",
          left: "100",
          height: "100",
          width: "200",
          shadowColor: "#7209b7",
          color: "#b46af0",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "account_balance",
              iconSize: "50",
              color: "#3c3939",
              onPressed: "page2",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Banking",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "100",
          height: "100",
          width: "200",
          shadowColor: "#7209b7",
          top: "220",
          color: "#b46af0",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              iconSize: "50",
              color: "#3c3939",
              onPressed: "page4",
              icon: "credit_card",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Card Services",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "100",
          height: "100",
          width: "200",
          shadowColor: "#7209b7",
          top: "350",
          color: "#b46af0",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              color: "#3c3939",
              onPressed: "page3",
              icon: "monetization_on",
              iconSize: "50",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Fund Transfer",
            },
          },
        ],
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "BANKING",
          backgroundColor: "#7209b7",
          centerTitle: "true",
          brightness: "dark",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "power_settings_new",
              color: "#ffffff",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          top: "60",
          left: "100",
          height: "100",
          width: "200",
          text: "Saving Account",
          onPressed: "page1",
          color: "#d4a3f5",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          left: "100",
          height: "100",
          width: "200",
          text: "FD Account",
          onPressed: "page1",
          color: "#d4a3f5",
          top: "302",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          left: "100",
          height: "100",
          width: "200",
          text: "Loan Account",
          onPressed: "page1",
          color: "#d4a3f5",
          top: "180",
        },
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "480",
          left: "260",
          height: "80",
          width: "150",
          floatingIcon: "home",
          onPressed: "page1",
          mini: "true",
          backgroundColor: "#b46af0",
        },
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "CARD SERVICES",
          backgroundColor: "#7209b7",
          centerTitle: "true",
          brightness: "dark",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "power_settings_new",
              color: "#fafafa",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "40",
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Self Fund Transfer",
              leading: "account_circle",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "120",
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Intra Fund Transfer",
              leading: "swap_vertical_circle",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "200",
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Inter Fund Transfer",
              leading: "swap_vert",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
          top: "280",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Add Beneficiaries",
              leading: "supervisor_account",
            },
          },
        ],
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "480",
          left: "260",
          height: "80",
          width: "150",
          floatingIcon: "home",
          onPressed: "page1",
          backgroundColor: "#b46af0",
        },
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          backgroundColor: "#7209b7",
          centerTitle: "true",
          brightness: "dark",
          title: "FUND TRANSFER",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "power_settings_new",
              color: "#fafafa",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
          top: "37",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Debit Card Blocking",
              leading: "arrow_forward_ios",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "117",
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Debit Card Pin Regeneration",
              leading: "arrow_forward_ios",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
          top: "197",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Warm Listing (Temporary Block",
              leading: "arrow_forward_ios",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
          top: "277",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Un-warm Listing (Unblock",
              leading: "arrow_forward_ios",
            },
          },
        ],
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "505",
          left: "260",
          height: "70",
          width: "140",
          floatingIcon: "home",
          onPressed: "page1",
          backgroundColor: "#b46af0",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
          top: "357",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Manage Card Limit",
              leading: "arrow_forward_ios",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "10",
          height: "70",
          width: "390",
          color: "#d4a3f5",
          top: "437",
        },
        childWidgets: [
          {
            childDropdown: "Listtile",
            childProperties: {
              title: "Manage Channel Usage",
              leading: "arrow_forward_ios",
            },
          },
        ],
      },
    ],
    order: 4,
  },
};

export const template6 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "80",
          height: "80",
          width: "190",
          left: "10",
          textValue: "Hello,",
          style: "16,bold,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "4",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "0",
          top: "150",
          width: "260",
          textValue: "Welcome",
          height: "90",
          style: "13,bold,000000",
          textScaleFactor: "4",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "0",
          height: "60",
          width: "170",
          top: "80",
          textValue: ".",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "14",
          style: "15,bold,70e000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "0",
          height: "60",
          width: "170",
          top: "80",
          textValue: ".",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "4",
          style: "13,bold,000000",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "400",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Username",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "480",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Password",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "470",
          left: "340",
          height: "80",
          width: "20",
          color: "#672dbe",
          icon: "lock",
          size: "30",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          left: "340",
          top: "390",
          height: "80",
          width: "20",
          icon: "person",
          color: "#672dbe",
          size: "30",
        },
      },
      {
        parentDropdown: "CheckBox",
        parentProperties: {
          top: "560",
          left: "250",
          height: "30",
          width: "30",
          activeColor: "#f28482",
          checkColor: "#672dbe",
          parameter: "hee",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "565",
          left: "265",
          height: "120",
          width: "120",
          textValue: "Remember Me",
          style: "15,normal,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "620",
          left: "80",
          height: "50",
          width: "270",
          color: "#d3c0c0",
          shape: "d3c0c0,1,30",
          text: "Submit",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "680",
          left: "80",
          height: "50",
          width: "270",
          color: "#d3c0c0",
          text: "Login with Facebook",
          shape: "d3c0c0,1,30",
          onPressed: "page1",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "230",
          height: "120",
          width: "170",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,000000",
              textName: "New Here ? ",
            },
          },
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,000000",
              textName: "Sign Up !",
            },
          },
        ],
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "50",
          height: "120",
          width: "120",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Forgot Password ?",
              style: "14,bold,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Login To Continue",
          style: "13,bold,084c61",
          textAlign: "center",
          textDirection: "ltr",
          top: "350",
          left: "00",
          height: "40",
          width: "300",
          textScaleFactor: "2",
        },
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Choose Your",
          top: "35",
          height: "50",
          left: "20",
          width: "200",
          style: "20,normal,6c757d",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "20",
          width: "200",
          style: "20,bold,2b2d42",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
          top: "60",
          height: "80",
          textValue: "Design Course",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "40",
          left: "350",
          height: "50",
          width: "70",
          icon: "person",
          color: "#704242",
          size: "40",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "120",
          left: "20",
          height: "50",
          width: "300",
          cursorColor: "#131111",
          decoration: "10,10,adb5bd,10,Search here",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "250",
          left: "20",
          height: "180",
          width: "180",
          color: "#d8e2dc",
          shadowColor: "#d3c0c0",
          onTap: "page3",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Web Design",
              style: "10,bold,2b2d42",
              textScaleFactor: "2",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "130",
              imageWidth: "130",
              fit: "fill",
              url:
                "https://cdn.mos.cms.futurecdn.net/CT9xCjqrhnPD4ivB6B8Hqe.jpg",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "250",
          left: "230",
          height: "180",
          width: "180",
          color: "#d8e2dc",
          shadowColor: "#d3c0c0",
          onTap: "page4",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "English Grammar",
              style: "10,bold,2b2d42",
              textScaleFactor: "2",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "130",
              imageWidth: "130",
              fit: "fill",
              url:
                "https://st2.depositphotos.com/1610517/10046/i/600/depositphotos_100463724-stock-photo-grammar-concept-word-cloud.jpg",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "480",
          left: "20",
          height: "180",
          width: "180",
          color: "#d8e2dc",
          shadowColor: "#d3c0c0",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              style: "10,bold,2b2d42",
              textScaleFactor: "2",
              textValue: "Data Science",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "130",
              imageWidth: "130",
              fit: "fill",
              url:
                "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/when-to-use-data-science-in-seo-5def8e5b1c22c-760x400.png",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "480",
          left: "230",
          height: "180",
          width: "180",
          color: "#d8e2dc",
          shadowColor: "#d3c0c0",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              style: "10,bold,2b2d42",
              textScaleFactor: "2",
              textValue: "Full Stack Java",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "130",
              imageWidth: "130",
              fit: "fill",
              url:
                "https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg",
            },
          },
        ],
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          url: "https://freesvg.org/img/students_group_work.png",
          top: "70",
          left: "150",
          height: "250",
          width: "200",
          fit: "fitHeight",
          imageHeight: "200",
          imageWidth: "300",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "330",
          left: "0",
          height: "600",
          width: "430",
          color: "#f8edeb",
          shape: "f8f9fa,1,20",
        },
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "320",
          left: "330",
          height: "50",
          width: "50",
          floatingIcon: "favorite_border",
          shape: "f8f9fa,1,30",
          onPressed: "page1",
          backgroundColor: "#3a86ff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "350",
          left: "30",
          height: "70",
          width: "200",
          textValue: "Web Design Course",
          style: "13,bold,3a86ff",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "20",
          width: "180",
          style: "17,bold,3a86ff",
          textAlign: "left",
          textDirection: "ltr",
          height: "180",
          textValue: "\\$250.00",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "448",
          left: "400",
          height: "20",
          width: "20",
          icon: "star",
          color: "#3a86ff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "430",
          left: "360",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
          height: "55",
          width: "40",
          textValue: " 4.3*",
          style: "20,bold,2b2d42",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "500",
          height: "60",
          width: "80",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          left: "20",
          shadowColor: "#d3c0c0",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "25d",
              style: "15,bold,3a86ff",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Classes",
              style: "15,bold,8d99ae",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "500",
          height: "60",
          width: "80",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "120",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "2h",
              style: "15,bold,3a86ff",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Time",
              style: "15,bold,8d99ae",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "500",
          height: "60",
          width: "80",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "220",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "24s",
              style: "15,bold,3a86ff",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              style: "15,bold,8d99ae",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
              textValue: "Seat",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "700",
          height: "60",
          width: "70",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "20",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "3",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "arrow_back_ios",
              onPressed: "page2",
              splashColor: "#e63946",
            },
          },
        ],
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "705",
          left: "120",
          height: "50",
          width: "270",
          color: "#3a86ff",
          text: "Join Course",
          shape: "3a86ff,1,20",
          onPressed: "page3",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "600",
          left: "20",
          height: "200",
          width: "400",
          textValue:
            "This handy tool helps you create dummy text for all your layout needs.We are gradually adding new functionality and we welcome your suggestions and feedback.Please feel free to send us any additional dummy texts",
          style: "15,normal,2b2d42",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          top: "70",
          left: "50",
          height: "250",
          width: "400",
          fit: "fitHeight",
          imageHeight: "200",
          imageWidth: "300",
          url: "https://freesvg.org/img/lezione-latino-spqr.png",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "330",
          left: "0",
          height: "600",
          width: "430",
          color: "#f8edeb",
          shape: "f8f9fa,1,20",
        },
      },
      {
        parentDropdown: "FloatingActionButton",
        parentProperties: {
          top: "320",
          left: "330",
          height: "50",
          width: "50",
          floatingIcon: "favorite_border",
          shape: "f8f9fa,1,30",
          onPressed: "page1",
          backgroundColor: "#3a86ff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "350",
          left: "30",
          height: "70",
          width: "300",
          textValue: "English Grammar Course",
          style: "13,bold,3a86ff",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "450",
          left: "20",
          width: "180",
          style: "17,bold,3a86ff",
          textAlign: "left",
          textDirection: "ltr",
          height: "180",
          textValue: "\\$230.00",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "448",
          left: "400",
          height: "20",
          width: "20",
          icon: "star",
          color: "#3a86ff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "430",
          left: "360",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
          height: "55",
          width: "40",
          textValue: " 4.3*",
          style: "20,bold,2b2d42",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "500",
          height: "60",
          width: "80",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          left: "20",
          shadowColor: "#d3c0c0",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "25d",
              style: "15,bold,3a86ff",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Classes",
              style: "15,bold,8d99ae",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "500",
          height: "60",
          width: "80",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "120",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "2h",
              style: "15,bold,3a86ff",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Time",
              style: "15,bold,8d99ae",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "500",
          height: "60",
          width: "80",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "220",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "5",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "24s",
              style: "15,bold,3a86ff",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              style: "15,bold,8d99ae",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
              textValue: "Seat",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "700",
          height: "60",
          width: "70",
          color: "#f0efeb",
          shape: "cad2d5,1,10",
          shadowColor: "#d3c0c0",
          left: "20",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "arrow_back_ios",
              onPressed: "page2",
              splashColor: "#e63946",
            },
          },
        ],
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "705",
          left: "120",
          height: "50",
          width: "270",
          color: "#3a86ff",
          text: "Join Course",
          shape: "3a86ff,1,20",
          onPressed: "page3",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "600",
          left: "20",
          height: "200",
          width: "400",
          textValue:
            "This handy tool helps you create dummy text for all your layout needs.We are gradually adding new functionality and we welcome your suggestions and feedback.Please feel free to send us any additional dummy texts",
          style: "15,normal,2b2d42",
          textAlign: "left",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
    ],
    order: 4,
  },
};

export const template7 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          url:
            "https://i.pinimg.com/564x/66/66/73/666673db2595dfa76b97e562c611dc21.jpg",
          top: "0",
          left: "0",
          height: "900",
          width: "450",
          imageHeight: "300",
          imageWidth: "300",
          fit: "fitHeight",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "250",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Username",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "330",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Password",
        },
      },

      {
        parentDropdown: "CheckBox",
        parentProperties: {
          top: "400",
          left: "250",
          height: "30",
          width: "30",
          activeColor: "#f28482",
          checkColor: "#672dbe",
          parameter: "hee",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "406",
          left: "267",
          height: "120",
          width: "120",
          textValue: "Remember Me",
          style: "15,normal,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "470",
          left: "80",
          height: "50",
          width: "270",
          color: "#d8e2dc",
          shape: "eac2d6,1,30",
          text: "Submit",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "530",
          left: "80",
          height: "50",
          width: "270",
          color: "#d8e2dc",
          text: "Login with Facebook",
          shape: "eac2d6,1,30",
          onPressed: "page1",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "230",
          height: "120",
          width: "170",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,ffffff",
              textName: "New Here ? ",
            },
          },
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,ffffff",
              textName: "Sign Up !",
            },
          },
        ],
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "40",
          height: "120",
          width: "120",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,ffffff",
              textName: "Forgot Password ?",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Login Here",
          style: "16,bold,ffffff",
          textAlign: "center",
          textDirection: "ltr",
          top: "150",
          left: "100",
          height: "80",
          width: "190",
          textScaleFactor: "2",
        },
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "40",
          left: "50",
          height: "60",
          width: "300",
          textValue: "Wallpaper App",
          style: "25,bold,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "85",
          left: "20",
          height: "50",
          width: "360",
          decoration: "10,10,672dbe,10, Search Wallpaper",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "65",
          left: "340",
          height: "80",
          width: "20",
          icon: "person",
          color: "#672dbe",
          size: "30",
        },
      },
      {
        parentDropdown: "ListView",
        parentProperties: {
          top: "130",
          left: "0",
          height: "80",
          width: "450",
          padding: "20",
          scrollDirection: "horizontal",
        },
        childWidgets: [
          {
            childDropdown: "RaisedButton",
            childProperties: {
              textColor: "#ffffff",
              color: "#80b918",
              shape: "1d3557,1,20",
              text: "Wild Life",
              onPressed: "page5",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "4",
            },
          },
          {
            childDropdown: "RaisedButton",
            childProperties: {
              color: "#80b918",
              textColor: "#ffffff",
              shape: "1d3557,1,20",
              onPressed: "page3",
              text: "Nature",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "4",
            },
          },
          {
            childDropdown: "RaisedButton",
            childProperties: {
              color: "#80b918",
              text: "Trendy",
              shape: "1d3557,1,20",
              textColor: "#ffffff",
              onPressed: "page4",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "4",
            },
          },
          {
            childDropdown: "RaisedButton",
            childProperties: {
              color: "#80b918",
              text: "Landscape",
              shape: "1d3557,1,20",
              textColor: "#ffffff",
              onPressed: "page4",
            },
          },
        ],
      },
      {
        parentDropdown: "ListView",
        parentProperties: {
          top: "200",
          left: "10",
          height: "700",
          width: "420",
          padding: "20",
          scrollDirection: "vertical",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              url: "https://cioviews.com/wp-content/uploads/2020/12/1-3.jpg",
              imageHeight: "200",
              imageWidth: "410",
              fit: "fill",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://m.media-amazon.com/images/I/81cNoJ0XmJL._SL1280_.jpg",
              imageHeight: "200",
              imageWidth: "410",
              fit: "fill",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://i.pinimg.com/originals/51/de/d8/51ded861e40a4785dc80eb37b95ad8f3.jpg",
              imageHeight: "200",
              imageWidth: "410",
              fit: "fill",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://i.pinimg.com/originals/80/3d/1c/803d1c9deb2fab921fafd182b0dc6690.jpg",
              imageHeight: "200",
              imageWidth: "410",
              fit: "fill",
            },
          },
        ],
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "ListView",
        parentProperties: {
          top: "30",
          left: "10",
          height: "650",
          width: "800",
          scrollDirection: "horizontal",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://i.pinimg.com/originals/42/58/86/425886cfedf9eeb4e73cb3793767fe5d.jpg",
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
              onTap: "page4",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://m.media-amazon.com/images/I/81cNoJ0XmJL._SL1280_.jpg",
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://i.pinimg.com/originals/51/de/d8/51ded861e40a4785dc80eb37b95ad8f3.jpg",
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://i.pinimg.com/originals/80/3d/1c/803d1c9deb2fab921fafd182b0dc6690.jpg",
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "690",
          left: "20",
          height: "50",
          width: "100",
          textValue: "NATURE",
          style: "25,bold,000000",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "690",
          left: "290",
          height: "40",
          width: "130",
          color: "#00b4d8",
          textColor: "#fdfcfc",
          text: "Free",
          shape: "1d3557,1,20",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "765",
          left: "80",
          height: "45",
          color: "#80b918",
          textColor: "#fdfcfc",
          text: "Back To Home",
          shape: "1d3557,1,20",
          onPressed: "page1",
          width: "275",
        },
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "720",
          left: "20",
          width: "700",
          height: "50",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "4.3 Rating",
              style: "17,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "20",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "5.8M",
              style: "17,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Icon",
            childProperties: {
              icon: "cloud_download",
              size: "30",
              color: "#8e3fee",
            },
          },
        ],
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          top: "10",
          left: "3",
          height: "800",
          width: "425",
          url:
            "https://i.pinimg.com/originals/42/58/86/425886cfedf9eeb4e73cb3793767fe5d.jpg",
          fit: "fill",
          imageHeight: "300",
          imageWidth: "400",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "700",
          left: "80",
          height: "50",
          width: "270",
          color: "#001f54",
          shape: "eac2d6,1,30",
          text: "Set as Wallpaper",
          textColor: "#ffffff",
          onPressed: "page2",
        },
      },
    ],
    order: 4,
  },
  Page5: {
    parentWidgets: [
      {
        parentDropdown: "ListView",
        parentProperties: {
          top: "30",
          left: "10",
          height: "650",
          width: "800",
          scrollDirection: "horizontal",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
              url:
                "https://www.veguci.com/wp-content/uploads/2020/03/v2-b6ef21bbc63ade7ad10cd9f01987bb4e_720w-576x1024.jpg",
              onTap: "page6",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
              url:
                "https://i.pinimg.com/originals/06/f0/80/06f08069aabed4f673f7a4270019c25c.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
              url:
                "https://i.pinimg.com/736x/c3/8c/e5/c38ce59bca81978249af29df98aff6e9.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Image",
            childProperties: {
              imageHeight: "300",
              imageWidth: "300",
              fit: "fitHeight",
              url:
                "https://i.pinimg.com/originals/80/3d/1c/803d1c9deb2fab921fafd182b0dc6690.jpg",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "690",
          left: "0",
          height: "50",
          width: "150",
          style: "25,bold,000000",
          textScaleFactor: "1",
          textAlign: "center",
          textDirection: "ltr",
          textValue: "WILD LIFE",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "690",
          left: "290",
          height: "40",
          width: "130",
          color: "#00b4d8",
          textColor: "#fdfcfc",
          text: "Free",
          shape: "1d3557,1,20",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "765",
          left: "80",
          height: "45",
          color: "#80b918",
          textColor: "#fdfcfc",
          text: "Back To Home",
          shape: "1d3557,1,20",
          onPressed: "page1",
          width: "275",
        },
      },
      {
        parentDropdown: "Row",
        parentProperties: {
          top: "720",
          left: "20",
          width: "700",
          height: "50",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "4.35 Rating",
              style: "17,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "20",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "8.9M",
              style: "17,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxWidth: "10",
            },
          },
          {
            childDropdown: "Icon",
            childProperties: {
              icon: "cloud_download",
              size: "30",
              color: "#8e3fee",
            },
          },
        ],
      },
    ],
    order: 5,
  },
  Page6: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          top: "10",
          left: "3",
          height: "800",
          width: "425",
          fit: "fill",
          imageHeight: "300",
          imageWidth: "400",
          url:
            "https://www.veguci.com/wp-content/uploads/2020/03/v2-b6ef21bbc63ade7ad10cd9f01987bb4e_720w-576x1024.jpg",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "700",
          left: "80",
          height: "50",
          width: "270",
          color: "#001f54",
          shape: "eac2d6,1,30",
          text: "Set as Wallpaper",
          textColor: "#ffffff",
          onPressed: "page2",
        },
      },
    ],
    order: 6,
  },
};

export const template8 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "80",
          height: "80",
          width: "190",
          left: "10",
          textValue: "Hello,",
          style: "16,bold,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "4",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "0",
          top: "150",
          width: "260",
          textValue: "Welcome",
          height: "90",
          style: "13,bold,000000",
          textScaleFactor: "4",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "0",
          height: "60",
          width: "170",
          top: "80",
          textValue: ".",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "14",
          style: "15,bold,70e000",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          left: "0",
          height: "60",
          width: "170",
          top: "80",
          textValue: ".",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "4",
          style: "13,bold,000000",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "400",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Username",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "480",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Password",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "470",
          left: "340",
          height: "80",
          width: "20",
          color: "#672dbe",
          icon: "lock",
          size: "30",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          left: "340",
          top: "390",
          height: "80",
          width: "20",
          icon: "person",
          color: "#672dbe",
          size: "30",
        },
      },
      {
        parentDropdown: "CheckBox",
        parentProperties: {
          top: "560",
          left: "250",
          height: "30",
          width: "30",
          activeColor: "#f28482",
          checkColor: "#672dbe",
          parameter: "hee",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "565",
          left: "265",
          height: "120",
          width: "120",
          textValue: "Remember Me",
          style: "15,normal,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "620",
          left: "80",
          height: "50",
          width: "270",
          color: "#70e000",
          shape: "ccff33,1,30",
          text: "Submit",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "680",
          left: "80",
          height: "50",
          width: "270",
          color: "#70e000",
          text: "Login with Facebook",
          shape: "ccff33,1,30",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "230",
          height: "120",
          width: "170",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,000000",
              textName: "New Here ? ",
            },
          },
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,000000",
              textName: "Sign Up !",
            },
          },
        ],
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "50",
          height: "120",
          width: "120",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Forgot Password ?",
              style: "14,bold,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          textValue: "Login To Continue",
          style: "13,bold,084c61",
          textAlign: "center",
          textDirection: "ltr",
          top: "350",
          left: "00",
          height: "40",
          width: "300",
          textScaleFactor: "2",
        },
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "FitnessBuddy",
          leading: "menu",
          backgroundColor: "#003049",
          centerTitle: "true",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "1000",
          width: "500",
          color: "#e5e5e5",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "15",
          height: "180",
          width: "360",
          color: "#ff6392",
          left: "40",
          elevation: "20",
        },
        childWidgets: [],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "300",
          width: "400",
          textValue: "Welcome to FitnessBuddy!",
          left: "70",
          textDirection: "ltr",
          top: "50",
          textScaleFactor: "3",
          style: "15,bold,001d3d",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          height: "350",
          width: "400",
          textValue: "Take below challenges to stay fit!",
          left: "30",
          textDirection: "ltr",
          top: "220",
          textScaleFactor: "1",
          style: "25,bold,00798c",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "250",
          left: "20",
          height: "100",
          width: "410",
          title: "Cardiovascular or Aerobic Fitness",
          leading: "star",
          onTap: "page3",
          enabled: "true",
          selected: "false",
          trailing: "arrow_forward",
          dense: "false",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          top: "330",
          left: "20",
          height: "100",
          width: "410",
          title: "Anaerobic Fitness",
          leading: "star",
          onTap: "page4",
          enabled: "true",
          selected: "false",
          trailing: "arrow_forward",
          dense: "false",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          left: "20",
          height: "100",
          width: "410",
          title: "Joint Flexibility",
          leading: "star",
          onTap: "page5",
          enabled: "true",
          selected: "false",
          trailing: "arrow_forward",
          dense: "false",
          top: "410",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          left: "20",
          height: "100",
          width: "410",
          title: "Muscular Strength and Endurance",
          leading: "star",
          onTap: "page6",
          enabled: "true",
          selected: "false",
          trailing: "arrow_forward",
          dense: "false",
          top: "490",
        },
      },
      {
        parentDropdown: "Listtile",
        parentProperties: {
          left: "20",
          height: "100",
          width: "410",
          title: "Maintaining a Balanced Workout Routine",
          leading: "star",
          onTap: "page1",
          enabled: "true",
          selected: "false",
          trailing: "arrow_forward",
          dense: "false",
          top: "570",
        },
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "Cardiovascular or Aerobic Fitness",
          centerTitle: "true",
          backgroundColor: "#003049",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "1000",
          width: "500",
          color: "#e5e5e5",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "30",
          left: "30",
          height: "100",
          width: "400",
          textValue: "Cardiovascular or Aerobic Fitness",
          style: "30,bold,00798c",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "120",
          left: "30",
          height: "1500",
          width: "390",
          textValue:
            "Aerobic exercise is any activity that gets your blood pumping and large muscle groups working. Its also known as cardiovascular activity. Examples of aerobic exercise include; brisk walking, swimming ,heavy cleaning ,or gardening running ,cycling, playing ,soccer etc.                        Experts recommend getting at least 150 minutes of moderate aerobic exercise, or 75 minutes of vigorous activity each week. Brisk walking or swimming are examples of moderate activity. Running or cycling are examples of vigorous activity.",
          style: "22,bold,000000",
          textDirection: "ltr",
        },
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "Anaerobic Fitness",
          centerTitle: "true",
          backgroundColor: "#003049",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "1000",
          width: "500",
          color: "#e5e5e5",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "30",
          left: "30",
          height: "100",
          width: "400",
          textValue: "Anaerobic Fitness",
          style: "30,bold,00798c",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "100",
          left: "30",
          height: "1500",
          width: "390",
          textValue:
            "Anaerobic fitness is that which is directly related to short, powerful bursts of energy such as that required for sprinting, power lifting and short, fast movements.  Exercises related to anaerobic fitness should be intense enough to cause the formation of lactate, eventually enhancing strength, speed and power for non-endurance activities.                                               There are five different types of anaerobic activity:  Weight-lifting, Sprinting, Plyometrics (movements associated with increased muscular power), Isometrics (activity done from a static position), and High-intensity interval training which requires repetitive short and powerful movements.",
          style: "22,bold,000000",
          textDirection: "ltr",
        },
      },
    ],
    order: 4,
  },
  Page5: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "Joint Flexibility",
          centerTitle: "true",
          backgroundColor: "#003049",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "1000",
          width: "500",
          color: "#e5e5e5",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "30",
          left: "30",
          height: "100",
          width: "400",
          textValue: "Joint Flexibility",
          style: "30,bold,00798c",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "100",
          left: "30",
          height: "1500",
          width: "390",
          textValue:
            "Fitness related to joint flexibility increases a persons range of movement in a series of joints. In addition to this, it accounts for the lengthening of muscles across joints to facilitate a bending motion.  Joint flexibility will vary from person to person, but can still be cultivated with the right workout routine to increase their range of movement.  This results in a number of benefits including fewer injuries when exercising, suppression of joint pain, enhanced posture and improved balanced as well as better strength.",
          style: "22,bold,000000",
          textDirection: "ltr",
        },
      },
    ],
    order: 5,
  },
  Page6: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "Muscular Strength and Endurance",
          centerTitle: "true",
          backgroundColor: "#003049",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "1000",
          width: "500",
          color: "#e5e5e5",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "30",
          left: "30",
          height: "100",
          width: "400",
          textValue: "Muscular Strength and Endurance",
          style: "30,bold,00798c",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "110",
          left: "30",
          height: "1500",
          width: "390",
          textValue:
            "Muscular strength is a type of fitness directly related to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights.  It increases a persons ability to work against resistance by maximising the force that can be applied against a load.  Endurance and strength training have a number of positive impacts on the body, including increased bone density to reduce the risk of osteoporosis. It helps athletes to manage their weight and muscle mass effectively and can increase metabolism.",
          style: "22,bold,000000",
          textDirection: "ltr",
        },
      },
    ],
    order: 6,
  },
};
export const template9 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "850",
          width: "800",
          color: "#e45011",
          onTap: "page1",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "350",
          left: "70",
          height: "130",
          width: "300",
          textValue: "FOOD",
          style: "55,bold,ffffff",
          textAlign: "center",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "470",
          left: "70",
          height: "100",
          width: "300",
          style: "40,bold,ffffff",
          textAlign: "center",
          textValue: "Order Online",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "580",
          left: "100",
          height: "50",
          width: "240",
          color: "#008000",
          shape: "000000,1,10",
          textColor: "#000000",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "590",
          left: "140",
          height: "70",
          width: "150",
          textValue: "Order now",
          textScaleFactor: "2",
          textAlign: "center",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "100",
          left: "110",
          height: "150",
          width: "200",
          icon: "restaurant",
          color: "#ffffff",
          size: "150",
        },
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "eDelivery",
          backgroundColor: "#e45011",
          leading: "menu",
          elevation: "5",
          centerTitle: "true",
          primary: "true",
          toolbarHeight: "60",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "shopping_cart",
              iconSize: "35",
              color: "#ffffff",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-5",
          left: "-3",
          height: "185",
          width: "440",
          color: "#e63946",
        },
        childWidgets: [],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          height: "185",
          width: "220",
          color: "#348aa7",
          top: "180",
          left: "-3",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "-3",
          height: "185",
          width: "220",
          color: "#d42f9d",
          top: "365",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "550",
          left: "-3",
          height: "185",
          width: "220",
          color: "#5fbf8a",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          height: "185",
          width: "220",
          color: "#8a3fcc",
          top: "180",
          left: "217",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "217",
          height: "185",
          width: "220",
          color: "#f3722c",
          top: "365",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "550",
          left: "217",
          height: "185",
          width: "220",
          color: "#e76f51",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "40",
          left: "15",
          height: "100",
          width: "400",
          textAlign: "center",
          textValue: "Hunger Fest",
          style: "60,bold,ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "110",
          height: "50",
          width: "500",
          textAlign: "center",
          textValue: "Get up to 60% off from top restaurants",
          style: "20,bold,000000",
          left: "-30",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "210",
          left: "40",
          height: "100",
          width: "100",
          iconSize: "100",
          icon: "local_pizza",
          onPressed: "page3",
          color: "#ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "320",
          left: "50",
          height: "50",
          width: "100",
          textValue: "Pizza",
          style: "30,normal,ffffff",
          textAlign: "center",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "210",
          left: "280",
          height: "100",
          width: "100",
          iconSize: "100",
          icon: "restaurant_menu",
          onPressed: "page3",
          color: "#ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "320",
          left: "290",
          height: "50",
          width: "100",
          textValue: "Staters",
          style: "30,normal,ffffff",
          textAlign: "center",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "390",
          left: "40",
          height: "100",
          width: "100",
          iconSize: "100",
          icon: "fastfood",
          onPressed: "page3",
          color: "#ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "500",
          left: "50",
          height: "50",
          width: "100",
          textValue: "Burger",
          style: "30,normal,ffffff",
          textAlign: "center",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "580",
          left: "40",
          height: "100",
          width: "100",
          iconSize: "100",
          icon: "local_drink",
          onPressed: "page3",
          color: "#ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "680",
          left: "50",
          height: "50",
          width: "100",
          textValue: "Drinks",
          style: "30,normal,ffffff",
          textAlign: "center",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "400",
          left: "280",
          height: "100",
          width: "100",
          iconSize: "100",
          icon: "free_breakfast",
          onPressed: "page3",
          color: "#ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "500",
          left: "240",
          height: "50",
          width: "200",
          textValue: "Breakfast",
          style: "30,normal,ffffff",
          textAlign: "center",
        },
      },
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "580",
          left: "280",
          height: "100",
          width: "100",
          iconSize: "100",
          icon: "local_bar",
          onPressed: "page3",
          color: "#ffffff",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "680",
          left: "290",
          height: "50",
          width: "100",
          textValue: "Bar",
          style: "30,normal,ffffff",
          textAlign: "center",
        },
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "AppBar",
        parentProperties: {
          title: "eDelivery",
          backgroundColor: "#e45011",
          leading: "menu",
          elevation: "5",
          centerTitle: "true",
          primary: "true",
          toolbarHeight: "60",
        },
        childWidgets: [
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "shopping_cart",
              iconSize: "35",
              color: "#ffffff",
              onPressed: "page1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "0",
          left: "0",
          height: "180",
          width: "430",
          color: "#fec5bb",
          onTap: "page4",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "SUSHI",
              style: "40,bold,000000",
              textAlign: "left",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue:
                "It is a Japanese style of food that uses fish (raw or cooked), vegetables, and is often combined with rice that is been seasoned with vinegar. Pickled ginger, wasabi, and soy sauce are usually served on the side",
              style: "17,normal,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "0",
          height: "180",
          width: "430",
          color: "#caffbf",
          onTap: "page4",
          top: "180",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "DIM SUM",
              style: "40,bold,000000",
              textAlign: "left",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue:
                "Dim sum is a traditional Chinese meal made up of small plates of dumplings and other snack dishes and is usually accompanied by tea. Similar to the way that the Spanish eat tapas, the dishes are shared among family and friends. Typically dim sum is consumed during brunch hours, late morning to lunchtime",
              style: "17,normal,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          left: "0",
          height: "180",
          width: "430",
          color: "#ffc6ff",
          onTap: "page4",
          top: "360",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "PASTA",
              style: "40,bold,000000",
              textAlign: "left",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue:
                "is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. ... Pasta is a staple food of Italian cuisine",
              style: "17,normal,000000",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "540",
          left: "0",
          height: "180",
          width: "430",
          color: "#9bf6ff",
          onTap: "page4",
        },
        childWidgets: [
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "CURRY",
              style: "40,bold,000000",
              textAlign: "left",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue:
                "Curry is a variety of dishes originating in the Indian subcontinent that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander, ginger, and fresh or dried chilies",
              style: "17,normal,000000",
            },
          },
        ],
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-10",
          left: "-10",
          height: "850",
          width: "800",
          color: "#e45011",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "350",
          left: "90",
          height: "80",
          width: "280",
          color: "#008000",
          shape: "000000,1,10",
          textColor: "#000000",
          onPressed: "page1",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "370",
          left: "105",
          height: "50",
          width: "250",
          textValue: "Place your order",
          textAlign: "center",
          textScaleFactor: "2",
        },
      },
    ],
    order: 4,
  },
};

export const template10 = {
  Page1: {
    parentWidgets: [
      {
        parentDropdown: "Image",
        parentProperties: {
          top: "0",
          left: "-20",
          height: "900",
          width: "700",
          url:
            "https://i.pinimg.com/originals/82/4d/fe/824dfe873314fd0e31eae89c9ae80ad1.jpg",
          fit: "fill",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "80",
          left: "130",
          height: "80",
          width: "190",
          textValue: "Plant App",
          style: "16,bold,023e7d",
          textScaleFactor: "2",
          textAlign: "center",
          textDirection: "ltr",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "150",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter UserName",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "230",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Enter Password",
        },
      },
      {
        parentDropdown: "CheckBox",
        parentProperties: {
          top: "310",
          left: "250",
          height: "30",
          width: "30",
          activeColor: "#f28482",
          checkColor: "#672dbe",
          parameter: "hee",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "316",
          left: "267",
          height: "120",
          width: "120",
          textValue: "Remember Me",
          style: "15,normal,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "350",
          left: "80",
          height: "50",
          width: "270",
          color: "#023e7d",
          textColor:"#d8e2dc",
          shape: "d3c0c0,1,30",
          text: "Submit",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "RaisedButton",
        parentProperties: {
          top: "410",
          left: "80",
          height: "50",
          width: "270",
          color: "#023e7d",
          textColor:"#d8e2dc",
          text: "Login with Facebook",
          shape: "d3c0c0,1,30",
          onPressed: "page1",
        },
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "230",
          height: "120",
          width: "170",
          textAlign: "center",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,073b4c",
              textName: "New Here ? ",
            },
          },
          {
            childDropdown: "TextSpan",
            childProperties: {
              style: "14,bold,073b4c",
              textName: "Sign Up !",
            },
          },
        ],
      },
      {
        parentDropdown: "RichText",
        parentProperties: {
          top: "790",
          left: "50",
          height: "120",
          width: "120",
        },
        childWidgets: [
          {
            childDropdown: "TextSpan",
            childProperties: {
              textName: "Forgot Password ?",
              style: "14,bold,ffe8d6",
            },
          },
        ],
      },
    ],
    order: 1,
  },
  Page2: {
    parentWidgets: [
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "-50",
          left: "-10",
          height: "300",
          width: "450",
          color: "#40916c",
          shape: "f8f9fa,1,60",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "45",
          left: "150",
          height: "40",
          width: "130",
          textValue: "Plantifier",
          style: "25,bold,f8f9fa",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          top: "15",
          left: "15",
          height: "80",
          width: "20",
          icon: "menu",
          color: "#f8f9fa",
          size: "30",
        },
      },
      {
        parentDropdown: "Icon",
        parentProperties: {
          left: "390",
          height: "80",
          width: "20",
          icon: "notifications",
          color: "#f8f9fa",
          size: "30",
          top: "15",
        },
      },
      {
        parentDropdown: "TextField",
        parentProperties: {
          top: "140",
          left: "40",
          height: "80",
          width: "360",
          decoration: "10,10,672dbe,10,Search Here",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "305",
          left: "00",
          height: "50",
          width: "230",
          style: "20,bold,40916c",
          textScaleFactor: "1",
          textDirection: "ltr",
          textAlign: "center",
          textValue: "Recommended For you",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          top: "305",
          left: "350",
          height: "30",
          width: "70",
          color: "#40916c",
          shape: "eac2d6,1,30",
          textColor: "#ffffff",
          text: "More",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          onTap: "page3",
          top: "350",
          left: "10",
          height: "200",
          width: "200",
          color: "#cbdfbd",
          shape: "f8f9fa,1,20",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              url:
                "https://ca-times.brightspotcdn.com/dims4/default/406b5fe/2147483647/strip/true/crop/1000x1000+0+0/resize/840x840!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8a%2Fa7%2F9db2eb9947799c492f7501853899%2Fhouse-plants-co-zzb6sc-3-tr-64-1000.jpg",
              fit: "fitWidth",
              imageHeight: "150",
              imageWidth: "150",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Dracaena Lisa cane ",
              style: "18,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          onTap: "page4",
          top: "350",
          left: "230",
          height: "200",
          width: "200",
          color: "#cbdfbd",
          shape: "f8f9fa,1,20",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              fit: "fill",
              imageHeight: "150",
              imageWidth: "150",
              url:
                "https://media1.popsugar-assets.com/files/thumbor/LByHs_aghgYHyq3OaTJ1UYxNqk0/0x77:1456x1533/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/03/838/n/1922794/2c0210f35ed7f4e940fcc1.10021346_/i/Best-Indoor-Flower-Plants-Beginners.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Moth orchid",
              style: "18,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          onTap: "page3",
          left: "10",
          height: "200",
          width: "200",
          color: "#cbdfbd",
          shape: "f8f9fa,1,20",
          top: "580",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              fit: "fitWidth",
              imageHeight: "150",
              imageWidth: "150",
              url:
                "https://images-na.ssl-images-amazon.com/images/I/61hOM3gstiL._AC_SX425_.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Hirt\\'s Aluminum",
              style: "18,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          onTap: "page3",
          left: "230",
          height: "200",
          width: "200",
          color: "#cbdfbd",
          shape: "f8f9fa,1,20",
          top: "580",
        },
        childWidgets: [
          {
            childDropdown: "Image",
            childProperties: {
              fit: "fill",
              imageHeight: "150",
              imageWidth: "150",
              url:
                "https://www.budgetdirect.com.au/blog/wp-content/uploads/2019/02/Philodendron-Monstera.jpg",
            },
          },
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "Text",
            childProperties: {
              textValue: "Swiss cheese plant",
              style: "18,bold,000000",
              textAlign: "center",
              textDirection: "ltr",
              textScaleFactor: "1",
            },
          },
        ],
      },
    ],
    order: 2,
  },
  Page3: {
    parentWidgets: [
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "20",
          left: "0",
          height: "50",
          width: "50",
          iconSize: "30",
          icon: "arrow_back",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "Image",
        parentProperties: {
          url:
            "https://ca-times.brightspotcdn.com/dims4/default/406b5fe/2147483647/strip/true/crop/1000x1000+0+0/resize/840x840!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8a%2Fa7%2F9db2eb9947799c492f7501853899%2Fhouse-plants-co-zzb6sc-3-tr-64-1000.jpg",
          top: "0",
          left: "100",
          height: "650",
          width: "400",
          imageHeight: "600",
          imageWidth: "400",
          fit: "cover",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "150",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "favorite_border",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "280",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "add_shopping_cart",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "410",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "wb_sunny",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "540",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "help_outline",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "670",
          left: "0",
          height: "50",
          width: "260",
          textValue: "Dracaena Lisa ",
          style: "17,bold,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "2",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "680",
          height: "50",
          width: "90",
          style: "25,bold,40916c",
          textAlign: "center",
          textDirection: "ltr",
          left: "340",
          textValue: "\\$155 ",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "720",
          height: "50",
          width: "130",
          style: "25,bold,b5c99a",
          textAlign: "center",
          textDirection: "ltr",
          left: "00",
          textValue: "France ",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          width: "180",
          top: "760",
          left: "30",
          height: "50",
          color: "#40916c",
          textColor: "#f0f0f0",
          shape: "f8f9fa,1,30",
          onPressed: "page2",
          text: "BUY NOW",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          width: "180",
          top: "760",
          left: "240",
          height: "50",
          textColor: "#40916c",
          shape: "40916c,1,30",
          onPressed: "page2",
          text: "DESCRIPTION",
          color: "#fcfcfc",
        },
      },
    ],
    order: 3,
  },
  Page4: {
    parentWidgets: [
      {
        parentDropdown: "IconButton",
        parentProperties: {
          top: "20",
          left: "0",
          height: "50",
          width: "50",
          iconSize: "30",
          icon: "arrow_back",
          onPressed: "page2",
        },
      },
      {
        parentDropdown: "Image",
        parentProperties: {
          top: "0",
          left: "100",
          height: "650",
          width: "400",
          imageHeight: "600",
          imageWidth: "400",
          fit: "fill",
          url:
            "https://media1.popsugar-assets.com/files/thumbor/LByHs_aghgYHyq3OaTJ1UYxNqk0/0x77:1456x1533/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/03/838/n/1922794/2c0210f35ed7f4e940fcc1.10021346_/i/Best-Indoor-Flower-Plants-Beginners.jpg",
        },
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "150",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "favorite_border",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "280",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "add_shopping_cart",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "410",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "wb_sunny",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Card",
        parentProperties: {
          top: "540",
          left: "10",
          height: "80",
          width: "80",
          shape: "eac2d6,1,30",
        },
        childWidgets: [
          {
            childDropdown: "SizedBox",
            childProperties: {
              boxHeight: "10",
            },
          },
          {
            childDropdown: "IconButton",
            childProperties: {
              icon: "help_outline",
              iconSize: "30",
              color: "#0b0909",
              onPressed: "page2",
            },
          },
        ],
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "670",
          left: "0",
          height: "50",
          width: "230",
          style: "17,bold,000000",
          textAlign: "center",
          textDirection: "ltr",
          textScaleFactor: "2",
          textValue: "Moth orchid",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "680",
          height: "50",
          width: "90",
          style: "25,bold,40916c",
          textAlign: "center",
          textDirection: "ltr",
          left: "320",
          textValue: "\\$189.5 ",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Text",
        parentProperties: {
          top: "720",
          height: "50",
          width: "100",
          style: "25,bold,b5c99a",
          textAlign: "center",
          textDirection: "ltr",
          left: "00",
          textValue: " Italy",
          textScaleFactor: "1",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          width: "180",
          top: "760",
          left: "30",
          height: "50",
          color: "#40916c",
          textColor: "#f0f0f0",
          shape: "f8f9fa,1,30",
          onPressed: "page2",
          text: "BUY NOW",
        },
      },
      {
        parentDropdown: "Flatbutton",
        parentProperties: {
          width: "180",
          top: "760",
          left: "240",
          height: "50",
          textColor: "#40916c",
          shape: "40916c,1,30",
          onPressed: "page2",
          text: "DESCRIPTION",
          color: "#fcfcfc",
        },
      },
    ],
    order: 4,
  },
};

export const template11 =  {
  Page1: {
      "parentWidgets": [
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "-10",
                  "left": "-10",
                  "height": "1000",
                  "width": "500",
                  "color": "#e9ecef"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "80",
                  "left": "10",
                  "height": "80",
                  "width": "400",
                  "textValue": "Welcome back,",
                  "style": "14,bold,2b9348",
                  "textDirection": "ltr",
                  "textAlign": "center",
                  "textScaleFactor": "4"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "140",
                  "left": "-40",
                  "height": "150",
                  "width": "300",
                  "textValue": "User.",
                  "style": "14,bold,679436",
                  "textDirection": "ltr",
                  "textAlign": "center",
                  "textScaleFactor": "4"
              }
          },
          {
              "parentDropdown": "TextField",
              "parentProperties": {
                  "top": "400",
                  "left": "40",
                  "height": "80",
                  "width": "360",
                  "decoration": "10,10,672dbe,10,Username",
                  "style": "13,bold,000000"
              }
          },
          {
              "parentDropdown": "TextField",
              "parentProperties": {
                  "top": "480",
                  "left": "40",
                  "height": "80",
                  "width": "360",
                  "decoration": "10,10,672dbe,10,Password",
                  "style": "13,bold,000000"
              }
          },
          {
              "parentDropdown": "Icon",
              "parentProperties": {
                  "top": "470",
                  "left": "350",
                  "height": "80",
                  "width": "20",
                  "icon": "person",
                  "color": "#4d194d",
                  "size": "30"
              }
          },
          {
              "parentDropdown": "Icon",
              "parentProperties": {
                  "top": "390",
                  "left": "350",
                  "height": "80",
                  "width": "20",
                  "color": "#4d194d",
                  "size": "30",
                  "icon": "lock"
              }
          },
          {
              "parentDropdown": "CheckBox",
              "parentProperties": {
                  "top": "560",
                  "left": "250",
                  "height": "30",
                  "width": "30",
                  "activeColor": "#4d194d",
                  "checkColor": "#cdc832",
                  "parameter": "param"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "565",
                  "left": "278",
                  "height": "120",
                  "width": "120",
                  "textValue": "Remember me",
                  "style": "18,normal,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Flatbutton",
              "parentProperties": {
                  "top": "620",
                  "left": "80",
                  "height": "50",
                  "width": "270",
                  "color": "#679436",
                  "splashColor": "#ffd166",
                  "text": "LOGIN",
                  "onPressed": "page2"
              }
          },
          {
              "parentDropdown": "Flatbutton",
              "parentProperties": {
                  "top": "680",
                  "left": "80",
                  "height": "50",
                  "width": "270",
                  "color": "#679436",
                  "splashColor": "#ffd166",
                  "text": "LOGIN WITH FACEBOOK",
                  "onPressed": "page4"
              }
          },
          {
              "parentDropdown": "RichText",
              "parentProperties": {
                  "top": "760",
                  "left": "260",
                  "height": "120",
                  "width": "170"
              },
              "childWidgets": [
                  {
                      "childDropdown": "TextSpan",
                      "childProperties": {
                          "textName": "New here? Sign up",
                          "style": "18,bold,5e60ce"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "RichText",
              "parentProperties": {
                  "top": "760",
                  "left": "50",
                  "height": "120",
                  "width": "170"
              },
              "childWidgets": [
                  {
                      "childDropdown": "TextSpan",
                      "childProperties": {
                          "textName": "Forgot Password?",
                          "style": "18,bold,5e60ce"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "350",
                  "left": "30",
                  "height": "40",
                  "width": "400",
                  "textValue": "Please login to continue...",
                  "style": "13,bold,073b4c",
                  "textScaleFactor": "2"
              }
          }
      ],
      "order": 1
  },
  Page2: {
      "parentWidgets": [
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "left": "35",
                  "height": "80",
                  "width": "350",
                  "textValue": "What to eat today?",
                  "style": "20,bold,540d6e",
                  "textAlign": "center",
                  "textDirection": "ltr",
                  "textScaleFactor": "2",
                  "top": "45"
              }
          },
          {
              "parentDropdown": "TextField",
              "parentProperties": {
                  "top": "110",
                  "left": "20",
                  "height": "100",
                  "width": "400",
                  "decoration": "2,5,b7b7a4,2,search here",
                  "style": "15,bold,540d6e"
              }
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "220",
                  "left": "20",
                  "height": "160",
                  "width": "180",
                  "color": "#c291f2",
                  "elevation": "40",
                  "onTap": "page3"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Image",
                      "childProperties": {
                          "imageHeight": "150",
                          "imageWidth": "180",
                          "url": "https://freedesignfile.com/upload/2017/03/Rich-and-nutritious-breakfast-with-HD-picture-09.jpg",
                          "fit": "fill"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "220",
                  "left": "230",
                  "height": "160",
                  "width": "180",
                  "color": "#c291f2",
                  "elevation": "40",
                  "onTap": "page5"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Image",
                      "childProperties": {
                          "url": "https://i.pinimg.com/736x/5a/b6/b1/5ab6b1c8dc67b6f91ed1e915be6c5d37.jpg",
                          "fit": "fill",
                          "imageHeight": "150",
                          "imageWidth": "180"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "430",
                  "left": "230",
                  "height": "160",
                  "width": "180",
                  "color": "#c291f2",
                  "elevation": "40",
                  "onTap": "page3"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Image",
                      "childProperties": {
                          "url": "https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138550014.jpg",
                          "fit": "fill",
                          "imageHeight": "150",
                          "imageWidth": "180"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "640",
                  "left": "230",
                  "height": "160",
                  "width": "180",
                  "color": "#c291f2",
                  "elevation": "40",
                  "onTap": "page3"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Image",
                      "childProperties": {
                          "url": "https://media.istockphoto.com/photos/chinese-food-on-a-dark-table-picture-id600101062?k=6&m=600101062&s=612x612&w=0&h=F2i_0UDWXZrCRbR-aDrlPvBBFFr5h2oQcKBxGBr-D-s=",
                          "fit": "fill",
                          "imageHeight": "150",
                          "imageWidth": "180"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "430",
                  "left": "20",
                  "height": "160",
                  "width": "180",
                  "color": "#c291f2",
                  "elevation": "40",
                  "onTap": "page3"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Image",
                      "childProperties": {
                          "imageHeight": "150",
                          "imageWidth": "180",
                          "url": "https://static.toiimg.com/photo/74984407.cms",
                          "fit": "fill"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "640",
                  "left": "20",
                  "height": "160",
                  "width": "180",
                  "color": "#c291f2",
                  "elevation": "40",
                  "onTap": "page3"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Image",
                      "childProperties": {
                          "imageHeight": "150",
                          "imageWidth": "180",
                          "fit": "fill",
                          "url": "https://spiderimg.amarujala.com/assets/images/2016/03/07/non-vegetarian_1457348434.jpeg"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "190",
                  "left": "60",
                  "height": "100",
                  "width": "200",
                  "textValue": "Breakfast",
                  "style": "20,bold,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "190",
                  "left": "275",
                  "height": "100",
                  "width": "200",
                  "textValue": "Lunch",
                  "style": "20,bold,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "400",
                  "left": "275",
                  "height": "100",
                  "width": "200",
                  "textValue": "Veg special",
                  "style": "20,bold,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "610",
                  "left": "275",
                  "height": "100",
                  "width": "200",
                  "textValue": "Chinese",
                  "style": "20,bold,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "400",
                  "left": "70",
                  "height": "100",
                  "width": "200",
                  "textValue": "Dinner",
                  "style": "20,bold,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "610",
                  "left": "50",
                  "height": "100",
                  "width": "200",
                  "textValue": "Non-veg special",
                  "style": "20,bold,000000",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "AppBar",
              "parentProperties": {
                  "title": "Food Recipes",
                  "backgroundColor": "#ee4266",
                  "centerTitle": "true",
                  "leading": "menu"
              },
              "childWidgets": [
                  {
                      "childDropdown": "IconButton",
                      "childProperties": {
                          "icon": "power_settings_new",
                          "color": "#ffffff",
                          "tooltip": "logout",
                          "onPressed": "page1"
                      }
                  }
              ]
          }
      ],
      "order": 2
  },
  Page3: {
      "parentWidgets": [
          {
              "parentDropdown": "AppBar",
              "parentProperties": {
                  "title": "Breakfast",
                  "backgroundColor": "#ee4266",
                  "centerTitle": "true"
              }
          },
          {
              "parentDropdown": "Image",
              "parentProperties": {
                  "top": "-40",
                  "left": "-10",
                  "height": "900",
                  "width": "500",
                  "url": "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                  "fit": "cover"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "30",
                  "left": "20",
                  "height": "100",
                  "width": "400",
                  "textValue": "Pick from below and prepare your breakfast!",
                  "style": "15,bold,231942",
                  "textScaleFactor": "2"
              }
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "110",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "SOFT IDLI",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "210",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "DOSA",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "310",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "DAL KA PARATHA",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "410",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "KANDA POHA",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "510",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4",
                          "title": "RAWA UPMA"
                      }
                  }
              ]
          }
      ],
      "order": 3
  },
  Page4: {
      "parentWidgets": [
          {
              "parentDropdown": "AppBar",
              "parentProperties": {
                  "title": "SOFT IDLI",
                  "backgroundColor": "#ee4266",
                  "centerTitle": "true"
              }
          },
          {
              "parentDropdown": "Image",
              "parentProperties": {
                  "top": "70",
                  "left": "65",
                  "height": "160",
                  "width": "300",
                  "url": "https://www.thestatesman.com/wp-content/uploads/2019/04/idli-1024x684.jpg",
                  "fit": "fill"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "20",
                  "left": "20",
                  "height": "100",
                  "width": "400",
                  "textValue": "Soft Idli Recipe",
                  "style": "20,bold,613f75",
                  "textAlign": "center",
                  "textScaleFactor": "2"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "235",
                  "left": "20",
                  "height": "100",
                  "width": "400",
                  "textValue": "Soaking :",
                  "style": "25,bold,613f75",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "270",
                  "left": "20",
                  "height": "400",
                  "width": "400",
                  "textValue": "Wash the rice and urad dal separately until the water runs clean. Add the methi/fenugreek seeds to the rice and soak it in water for 4-6 hours. Soak the urad dal too for the same amount of time.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "390",
                  "left": "20",
                  "height": "400",
                  "width": "400",
                  "textValue": "Grinding :",
                  "style": "25,bold,613f75",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "420",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "Soak a fistful of thick poha (flattened rice) (if using) in water for 5 minutes before grinding rice. Drain all the water from the urad dal and grind it to a fine paste using spoonfuls of water at a time (approximately 3/4 cup in total). Grind the rice to a coarse paste with approximately 1 cup of water and then mix both the pastes together in a large bowl and whisk them well.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "630",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "Steaming :",
                  "style": "25,bold,613f75",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "660",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "Grease the idli stand with oil and take a ladleful of batter and fill the idli mold. Add 1/2 cup of water in the idli steamer and let it boil. Put the idli stand inside and close the lid. Let the steam build for 8-10 minutes before switching off the gas.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          }
      ],
      "order": 4
  },
  Page5: {
      "parentWidgets": [
          {
              "parentDropdown": "AppBar",
              "parentProperties": {
                  "title": "Lunch Showcase",
                  "backgroundColor": "#ee4266",
                  "centerTitle": "true"
              }
          },
          {
              "parentDropdown": "Image",
              "parentProperties": {
                  "top": "-40",
                  "left": "-10",
                  "height": "900",
                  "width": "500",
                  "url": "https://live.staticflickr.com/2891/33293700194_3c61bbe11c_b.jpg",
                  "fit": "cover"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "30",
                  "left": "20",
                  "height": "100",
                  "width": "400",
                  "textValue": "Pick from below and prepare your lunch!",
                  "style": "15,bold,231942",
                  "textScaleFactor": "2"
              }
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "110",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "Masala Bhindi",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page6"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "210",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4",
                          "title": "CHANNA KULCHA"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "310",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "SHAHI EGG CURRY",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "410",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "title": "GUJARATI KADHI",
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4"
                      }
                  }
              ]
          },
          {
              "parentDropdown": "Card",
              "parentProperties": {
                  "top": "510",
                  "left": "20",
                  "width": "400",
                  "color": "#e5e5e5",
                  "elevation": "20",
                  "shape": "8e7dbe,5,10",
                  "onTap": "page4",
                  "height": "70"
              },
              "childWidgets": [
                  {
                      "childDropdown": "Listtile",
                      "childProperties": {
                          "leading": "restaurant",
                          "trailing": "arrow_forward_ios",
                          "onTap": "page4",
                          "title": "KOLHAPURI VEGETABLES"
                      }
                  }
              ]
          }
      ],
      "order": 5
  },
  Page6: {
      "parentWidgets": [
          {
              "parentDropdown": "AppBar",
              "parentProperties": {
                  "title": "MASALA BHINDI",
                  "backgroundColor": "#ee4266",
                  "centerTitle": "true"
              }
          },
          {
              "parentDropdown": "Image",
              "parentProperties": {
                  "top": "70",
                  "left": "65",
                  "height": "160",
                  "width": "300",
                  "url": "http://www.veganricha.com/wp-content/uploads/2016/05/bhindi-masala-3165.jpg",
                  "fit": "fill"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "20",
                  "left": "20",
                  "height": "100",
                  "width": "400",
                  "textValue": "Masala Bhindi Recipe",
                  "style": "20,bold,613f75",
                  "textAlign": "center",
                  "textScaleFactor": "2"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "235",
                  "left": "20",
                  "height": "400",
                  "width": "400",
                  "textValue": "Ingredients Of Masala Bhindi :",
                  "style": "25,bold,613f75",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "270",
                  "left": "20",
                  "height": "400",
                  "width": "400",
                  "textValue": "250 gms bhindi, 1 bowl water, small, 7-8 tbsp mustard oil, 1 tsp jeera seeds, 1 tsp fennel seeds, 1 bowl onion, finely chopped, 1 tsp ginger, chopped, 1/2 tsp turmeric powder, to taste Salt, 1 tsp fennel powder, 1 1/2 tsp aamchoor powder, 1/4 tsp pepper powder, 1/2 tsp sugar and 1 tsp lime juice",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "440",
                  "left": "20",
                  "height": "400",
                  "width": "400",
                  "textValue": "How to Make Masala Bhindi :",
                  "style": "25,bold,613f75",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "470",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "1.Heat oil add jeera and fennel seeds, let them splutter.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "520",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "2.Add the onions and lightly brown them.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "550",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "3.Add ginger and some water, stir.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "580",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "4.Add the turmeric powder and stir again.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "610",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "5.Mix in the bhindi. Pour in the rest of the water and continue stirring.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "660",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "6.Mix in the bhindi well and add the salt. ",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "690",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "7.Sprinkle fennel powder, amchoor powder and sugar.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "740",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "8.Mix again and sprinkle the pepper powder.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          },
          {
              "parentDropdown": "Text",
              "parentProperties": {
                  "top": "770",
                  "left": "20",
                  "height": "500",
                  "width": "400",
                  "textValue": "9.Add the lime juice, stir well and serve.",
                  "style": "20,bold,000000",
                  "textAlign": "left",
                  "textScaleFactor": "1"
              }
          }
      ],
      "order": 6
  }
}

export const template12 = {
  Page1: {
    "parentWidgets": [
      {
        "parentDropdown": "Card",
        "parentProperties": {
          "top": "0",
          "left": "0",
          "height": "410",
          "width": "600",
          "color": "#d8e2dc"
        },
        "childWidgets": [
          {
            "childDropdown": "Image",
            "childProperties": {
              "url": "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              "fit": "cover"
            }
          }
        ]
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "430",
          "left": "115",
          "height": "100",
          "width": "200",
          "textValue": "Sell Used Cars",
          "style": "25,bold,000000",
          "textAlign": "center"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "470",
          "left": "70",
          "height": "100",
          "width": "300",
          "textValue": "Get the best price with the help of our car expert evaluators",
          "style": "15,normal,000000",
          "textAlign": "center"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "550",
          "height": "100",
          "width": "200",
          "textValue": "Login / Sign Up",
          "style": "25,normal,000000",
          "textAlign": "start",
          "left": "30"
        }
      },
      {
        "parentDropdown": "TextField",
        "parentProperties": {
          "top": "600",
          "left": "30",
          "width": "380",
          "decoration": "10,10,672dbe,1,+91     Enter Mobile Number                        Verify",
          "textAlign": "start",
          "height": "150"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "670",
          "height": "100",
          "width": "100",
          "textValue": "Or",
          "style": "15,normal,000000",
          "textAlign": "center",
          "left": "150"
        }
      },
      {
        "parentDropdown": "RaisedButton",
        "parentProperties": {
          "top": "700",
          "left": "30",
          "height": "65",
          "width": "380",
          "color": "#25D366",
          "onPressed": "page2"
        }
      },
      {
        "parentDropdown": "IconButton",
        "parentProperties": {
          "top": "700",
          "left": "50",
          "height": "30",
          "width": "100",
          "iconSize": "45",
          "icon": "settings_phone",
          "color": "#ffffff",
          "onPressed": "page2"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "720",
          "height": "100",
          "width": "250",
          "textValue": "Login with WhatsApp",
          "style": "22,bold,ffffff",
          "textAlign": "center",
          "left": "130"
        }
      }
    ],
    "order": 1
  },
  Page2: {
    "parentWidgets": [
      {
        "parentDropdown": "Card",
        "parentProperties": {
          "top": "0",
          "left": "0",
          "height": "370",
          "width": "600",
          "color": "#d8e2dc"
        },
        "childWidgets": [
          {
            "childDropdown": "Image",
            "childProperties": {
              "url": "https://images.unsplash.com/photo-1579762593131-b8945254345c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1122&q=80",
              "fit": "cover"
            }
          }
        ]
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "480",
          "left": "40",
          "height": "100",
          "width": "150",
          "textValue": "I WANT TO",
          "style": "25,bold,000000",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "400",
          "left": "100",
          "height": "100",
          "width": "200",
          "textValue": "BUY / SELL CARS",
          "style": "25,bold,000000",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "RaisedButton",
        "parentProperties": {
          "top": "550",
          "left": "40",
          "height": "60",
          "width": "360",
          "color": "#f8edeb",
          "onPressed": "page3"
        }
      },
      {
        "parentDropdown": "RaisedButton",
        "parentProperties": {
          "top": "630",
          "left": "40",
          "height": "60",
          "width": "360",
          "color": "#f8edeb",
          "onPressed": "page3"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "560",
          "left": "50",
          "height": "100",
          "width": "200",
          "textValue": "Sell my car",
          "style": "25,bold,000000",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "640",
          "left": "50",
          "height": "100",
          "width": "200",
          "textValue": "Buy a used car",
          "style": "25,bold,000000",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "IconButton",
        "parentProperties": {
          "top": "550",
          "left": "340",
          "height": "60",
          "width": "50",
          "iconSize": "40",
          "icon": "arrow_forward_ios",
          "color": "#0d0d0d",
          "onPressed": "page3"
        }
      },
      {
        "parentDropdown": "IconButton",
        "parentProperties": {
          "top": "630",
          "left": "340",
          "height": "60",
          "width": "50",
          "iconSize": "40",
          "icon": "arrow_forward_ios",
          "color": "#0d0d0d",
          "onPressed": "page3"
        }
      }
    ],
    "order": 2
  },
  Page3: {
    "parentWidgets": [
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "30",
          "left": "0",
          "height": "100",
          "width": "100",
          "icon": "people_outline",
          "size": "40"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "70",
          "left": "80",
          "height": "50",
          "width": "150",
          "textValue": "Hi, Customer",
          "style": "20,normal,000000"
        }
      },
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "60",
          "left": "250",
          "height": "50",
          "width": "100",
          "icon": "favorite_border",
          "size": "40"
        }
      },
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "60",
          "left": "320",
          "height": "50",
          "width": "100",
          "icon": "phone_in_talk",
          "size": "40"
        }
      },
      {
        "parentDropdown": "Card",
        "parentProperties": {
          "top": "120",
          "left": "0",
          "height": "300",
          "width": "440",
          "color": "#e2eafc",
          "onTap": "page4"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "150",
          "left": "40",
          "height": "100",
          "width": "120",
          "textValue": "The",
          "style": "60,bold,000000"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "145",
          "left": "160",
          "height": "100",
          "width": "200",
          "textValue": "future",
          "style": "70,bold,ff6b35"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "220",
          "left": "40",
          "height": "150",
          "width": "200",
          "textValue": "of car buying!",
          "style": "60,bold,000000"
        }
      },
      {
        "parentDropdown": "RaisedButton",
        "parentProperties": {
          "top": "500",
          "left": "50",
          "width": "330",
          "color": "#ff6b35",
          "onPressed": "page4",
          "height": "60"
        }
      },
      {
        "parentDropdown": "RaisedButton",
        "parentProperties": {
          "top": "600",
          "left": "50",
          "width": "330",
          "onPressed": "page4",
          "height": "60",
          "shape": "004e89,3,5",
          "color": "#f9f6f6"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "515",
          "left": "110",
          "height": "100",
          "width": "220",
          "textValue": "VIEW 2734+ CARS",
          "style": "25,bold,FFFFFF"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "615",
          "left": "120",
          "height": "100",
          "width": "220",
          "textValue": "GET FINANCING",
          "style": "25,bold,004e89"
        }
      }
    ],
    "order": 3
  },
  Page4: {
    "parentWidgets": [
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "30",
          "left": "0",
          "height": "100",
          "width": "100",
          "icon": "people_outline",
          "size": "40"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "70",
          "left": "80",
          "height": "50",
          "width": "150",
          "textValue": "Hi, Customer",
          "style": "20,normal,000000"
        }
      },
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "60",
          "left": "250",
          "height": "50",
          "width": "100",
          "icon": "favorite_border",
          "size": "40"
        }
      },
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "60",
          "left": "320",
          "height": "50",
          "width": "100",
          "icon": "phone_in_talk",
          "size": "40"
        }
      },
      {
        "parentDropdown": "Card",
        "parentProperties": {
          "top": "120",
          "left": "0",
          "height": "700",
          "width": "440",
          "color": "#e2eafc",
          "onTap": "page4"
        },
        "childWidgets": [
          {
            "childDropdown": "Image",
            "childProperties": {
              "url": "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60",
              "fit": "cover"
            }
          }
        ]
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "460",
          "left": "40",
          "height": "50",
          "width": "150",
          "textValue": "Red Audi coup",
          "style": "20,bold,023047",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "Icon",
        "parentProperties": {
          "top": "445",
          "left": "280",
          "height": "50",
          "width": "100",
          "icon": "favorite_border",
          "size": "40",
          "color": "#db0606"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "600",
          "left": "40",
          "height": "50",
          "width": "200",
          "textValue": "Rs. 45,628/month",
          "style": "20,bold,fb8500",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "600",
          "left": "280",
          "height": "50",
          "width": "200",
          "textValue": "Rs 50,56,210",
          "style": "20,normal,000000",
          "textAlign": "left"
        }
      },
      {
        "parentDropdown": "RaisedButton",
        "parentProperties": {
          "top": "680",
          "left": "90",
          "height": "50",
          "width": "250",
          "color": "#fb8500",
          "onPressed": "page2"
        }
      },
      {
        "parentDropdown": "Text",
        "parentProperties": {
          "top": "685",
          "left": "110",
          "height": "100",
          "textValue": "VIEW CAR",
          "style": "30,bold,ffffff",
          "textAlign": "center",
          "width": "180"
        }
      }
    ],
    "order": 4
  }
}