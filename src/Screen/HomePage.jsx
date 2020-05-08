import React, { Component, Fragment } from "react";
import Countdown from "../Component/Countdown/Countdown";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Promotion from "../Component/Promotion/Promotion";
import TopSelling from "../Component/Topselling/TopSelling";
import Featured from "../Component/Featured/Featured";
import Skill from "../Component/Skill/Skill";
import Footer from "../Component/Footer/Footer";
import CourseService from "../Services/courseService";
import Hotline from "../Component/Hotline/Hotline";
import LinkBar from "../Component/LinkBar/LinkBar";
import Recom from '../Component/Recommended/Recom'
import reduxAction from "../Store/Action/action";
import { connect } from "react-redux";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import { FETCH_COURSES } from "../Store/Action/type";
import Welcome from "../Component/Welcome/Welcome";
import SmartBar from "../Component/SmartBar/SmartBar";
const courseService = new CourseService();
const courseCatalog = [
  {
    maDanhMuc: "BackEnd",
    tenDanhMuc: "Database",
    icon: "./img/interface.png",
  },
  {
    maDanhMuc: "Design",
    tenDanhMuc: "Web Development",
    icon: "./img/web.png",
  },
  {
    maDanhMuc: "Mobile",
    tenDanhMuc: "Mobile Apps",
    icon: "./img/touch-screen.png",
  },
  {
    maDanhMuc: "FrontEnd",
    tenDanhMuc: "Front end ",
    icon: "./img/pencil.png",
  },
  {
    maDanhMuc: "FullStack",
    tenDanhMuc: "Full Stack ",
    icon: "./img/computer.png",
  },
  {
    maDanhMuc: "Thinking",
    tenDanhMuc: "Thinking Programming",
    icon: "./img/thinking.png",
  },

];
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseCatalog: [],
      loading: true,
    };
  }

  getCatalog = (data) => {
    this.setState({
      courseCatalog: data,
    });
  };

  componentDidMount() {
    courseService
      .fetchCourses()
      .then((res) => {
        this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    courseService
      .fetchCourseCatalog()
      .then((res) => {
        this.getCatalog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showWelcome = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user) {
      return <Welcome />;
    } else {
      return "";
    }
  };

  render() {
    let { courseList, history } = this.props;
    // let { courseCatalog } = this.state;
    console.log(courseCatalog);
    return (
      <div className="wrapper">
        <Fragment>
          <SmartBar />
          <Header history={history} courseCatalog={courseCatalog} />
          {/* courseCate call api  */}
          {/* <LinkBar courseCatalog={courseCatalog} /> */}

          {/* courseCate ko call api  */}
          <LinkBar courseCatalog={courseCatalog} />

          {this.showWelcome()}
          <Banner />
          <Promotion courseList={courseList} />
          <Recom />
          <TopSelling courseList={courseList} />
          <Featured courseList={courseList} />
          <Skill   courseList={courseList} />
          <Countdown />
          <Footer />
          <ScrollUpButton />
          {/* <Hotline /> */}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.Course.course,
  };
};
export default connect(mapStateToProps, null)(HomePage);
