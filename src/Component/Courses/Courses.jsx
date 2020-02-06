import React, { Component } from "react";
// import Pagination from "../Pagination/Pagination";
import Course from "../Course/Course";
import Pagination from '../Pagination/Pagination'
import "react-pagination-js/dist/styles.css";
import { connect } from "react-redux";
import CourseOfcourses from "../Course/CourseOfcourses";

class Courses extends Component {
  render() {
    let { courses } = this.props;
    let { searchKeyword } = this.props;
    console.log(searchKeyword);

    return (
      <div className="Course">
        <div className="search__box ">
          <div className="container">
            <div className="row  ">
              <div className="col-md-12 col-sm-12 px-0">
                <form className="search-form">
                  <ul className="search__menu">
                    <li>
                      <select className="course__category">
                        <option>Category</option>
                        <option className="level-0" value={21}>
                          Business&nbsp;&nbsp;(2)
                        </option>
                        <option className="level-1" value={29}>
                          &nbsp;&nbsp;&nbsp;Finance&nbsp;&nbsp;(2)
                        </option>
                        <option className="level-1" value={38}>
                          &nbsp;&nbsp;&nbsp;Management&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-1" value={55}>
                          &nbsp;&nbsp;&nbsp;Strategy&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-0" value={25}>
                          Creative&nbsp;&nbsp;(4)
                        </option>
                        <option className="level-1" value={33}>
                          &nbsp;&nbsp;&nbsp;GraphicDesign&nbsp;&nbsp;(3)
                        </option>
                        <option className="level-1" value={34}>
                          &nbsp;&nbsp;&nbsp;Guitar&nbsp;&nbsp;(1)
                        </option>
                        {"{"}" "{"}"}
                        <option className="level-1" value={42}>
                          &nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;(2)
                        </option>
                        <option className="level-0" value={31}>
                          General&nbsp;&nbsp;(2)
                        </option>
                        <option className="level-1" value={36}>
                          &nbsp;&nbsp;&nbsp;Health&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-1" value={58}>
                          &nbsp;&nbsp;&nbsp;Travel&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-1" value={60}>
                          &nbsp;&nbsp;&nbsp;Gaming&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-0" value={56}>
                          Technology&nbsp;&nbsp;(3)
                        </option>
                        <option className="level-1" value={59}>
                          &nbsp;&nbsp;&nbsp;WebDevelopment&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-1" value={61}>
                          &nbsp;&nbsp;&nbsp;Hardware&nbsp;&nbsp;(1)
                        </option>
                        <option className="level-1" value={62}>
                          &nbsp;&nbsp;&nbsp;OperatingSystems&nbsp;&nbsp;(3)
                        </option>
                      </select>
                    </li>
                    <li>
                      <select className="status">
                        <option value="true">Course Status</option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                      </select>
                    </li>
                    <li>
                      <input
                        className="search__input"
                        type="text"
                        placeholder="Type Keyword"
                      />
                    </li>
                    <li>
                      <button className="search__button" type="submit">
                        Search
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="container">
            <div className="row sort__filter align-items-center">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-0">
                <div className="sort">
                  <span>
                    <i className="fa fa-th-list" aria-hidden="true" />
                  </span>
                  <span>
                    <i className="fa fa-th-list" aria-hidden="true" />
                  </span>
                  <select className="sort__select" disabled>
                    <option value="newness">Sort by name high to low</option>
                    <option value="popularity">Sort by name low to high</option>
                    <option value="low">Sort by price low to high</option>
                    <option value="high">Sort by price high to low</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-0">
                <div className="filter text-right">
                  <span>
                    Showing 1–{courses.length} of {this.props.courses.length}{" "}
                    results
                  </span>
                  <span>
                    <span>
                      Filter <i className="fa fa-filter" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="row sort__items">
              {this.showCourseItem(courses, searchKeyword)}
            </div>
          </div>
          <Pagination/>
        </div>

      </div>
    );
  }

  showCourseItem = (courses, searchKeyword) => {
    let result = null;
    let newArr = [...courses];
    if (courses && courses.length > 0) {
      if (searchKeyword && searchKeyword.length > 0) {
        newArr = newArr.filter(
          item =>
            item.tenKhoaHoc
              .toLowerCase()
              .indexOf(searchKeyword.toLowerCase().trim()) !== -1
        );

        result = newArr.map((course, index) => {
          return (
            <div className="col-md-3 col-sm-3 my-3" key={index}>
              <CourseOfcourses course={course} />
            </div>
          );
        });
      } else {
        result = newArr.map((course, index) => {
          return (
            <div className="col-md-3 col-sm-3 my-3" key={index}>
              <CourseOfcourses course={course} />
            </div>
          );
        });
      }
    }

    return result;
  };
}

const mapStateToProps = state => ({
  searchKeyword: state.display.searchKeyword,
  courses: state.Course.course
});

// const mapDispatchToProps = dispatch => {
//   return {
//     handleSearch: keyword => {
//       dispatch({
//         type: SEARCH_COURSES,
//         payload: keyword
//       });
//     }
//   };
// };

export default connect(mapStateToProps)(Courses);
