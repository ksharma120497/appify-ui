import React from "react";
import { Drawer, Button, Space, message, Popconfirm } from "antd";
import image1 from "../../assets/img/template1.png";
import image2 from "../../assets/img/template2.png";
import image3 from "../../assets/img/template3.png";
import image4 from "../../assets/img/template4.png";
import image5 from "../../assets/img/template5.png";
import image6 from "../../assets/img/template6.png";
import image7 from "../../assets/img/template7.png";
import image8 from "../../assets/img/template8.png";
import image9 from "../../assets/img/template9.png";
import image10 from "../../assets/img/template10.png";
import image11 from "../../assets/img/template11.png";
import image12 from "../../assets/img/template12.png";
import {
  addTemplate,
  deletePage,
  incrementOnAddPage,
} from "../../store/page/action";
import {
  template1,
  template10,
  template11,
  template12,
  template2,
  template3,
  template4,
  template5,
  template6,
  template7,
  template8,
  template9,
} from "../mock/templates";

class DrawerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, placement: "top" };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        {
          <Space>
            <Popconfirm
              placement="bottomRight"
              title="Choosing a template will override any changes made on current page"
              onConfirm={this.showDrawer}
              okText="Proceed"
              cancelText="Cancel"
            >
              <Button style={{ borderRadius: "8px" }} type="primary">
                CHOOSE TEMPLATE
              </Button>
            </Popconfirm>
          </Space>
        }
        <Drawer
          title="Choose From Pre-Designed Templates"
          height={550}
          placement={placement}
          closable={true}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <h3 style={{ marginLeft: "15%" }}>Payment Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template4);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(40, "Template");
                  }
                }}
              >
                <img
                  src={image4}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "15%" }}>Banking Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template5);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(30, "Template");
                  }
                }}
              >
                <img
                  src={image5}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "15%" }}>PlantApp Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template10);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(30, "Template");
                  }
                }}
              >
                <img
                  src={image10}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "15%" }}>CarResale Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template12);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(30, "Template");
                  }
                }}
              >
                <img
                  src={image12}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
          </div>
          {/* ----------------------- Row 2 ------------------------ */}
          <div
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <h3 style={{ marginLeft: "15%" }}>Education Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template6);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(30, "Template");
                  }
                }}
              >
                <img
                  src={image6}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>

            <div>
              <h3 style={{ marginLeft: "15%" }}>Wallpaper Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template7);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(50, "Template");
                  }
                }}
              >
                <img
                  src={image7}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "15%" }}>Fitness Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template8);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(50, "Template");
                  }
                }}
              >
                <img
                  src={image8}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "15%" }}>Food Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template9);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(30, "Template");
                  }
                }}
              >
                <img
                  src={image9}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
          </div>

          {/* ----------------------- Row 3 ------------------------ */}
          <div
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <h3 style={{ marginLeft: "15%" }}>NewsApp Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template1);
                  message.success("Pre-filled template created!");
                  this.props.handlePagination(30, "Template");
                }}
              >
                <img
                  src={image1}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>

            <div>
              <h3 style={{ marginLeft: "15%" }}>FoodRecipe Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template11);
                  message.success("Pre-filled template created!");
                  if (!this.props.selWidgts) {
                    this.props.handlePagination(50, "Template");
                  }
                }}
              >
                <img
                  src={image11}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "15%" }}>E-Comm Template</h3>
              <Popconfirm
                placement="bottomRight"
                title="Use this template? "
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  addTemplate(template2);
                  message.success("Pre-filled template created!");
                  this.props.handlePagination(40, "Template");
                }}
              >
                <img
                  src={image2}
                  height="400"
                  width="200"
                  style={{ borderRadius: "15px" }}
                />
              </Popconfirm>
            </div>
            <div>
              <h3 style={{ marginLeft: "17%" }}>Travel Template</h3>
              <img
                src={image3}
                height="400"
                width="200"
                style={{ borderRadius: "15px" }}
                onClick={() => {
                  addTemplate(template3);
                  this.props.handlePagination(30);
                  message.success("Pre-filled template created!");
                }}
              />
            </div>
          </div>
        </Drawer>
      </>
    );
  }
}

export default DrawerButton;
