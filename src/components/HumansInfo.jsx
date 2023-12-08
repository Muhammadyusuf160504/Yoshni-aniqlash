import { useEffect } from "react";
import { useRef, useState } from "react";

function HumansInfo() {
  const day = useRef();
  const month = useRef();
  const year = useRef();

  const [aaassss, setaaassss] = useState();

  const aaasss = (e) => {
    e.preventDefault();
    setaaassss(e.target.value);
  };
  console.log(aaassss);
  const [humanDate, setHumanDate] = useState();
  const [humanMonth, setHumanMonth] = useState();
  const [humanYear, setHumanYear] = useState();

  const [hozirgiNewYil, setHozirgiNewYil] = useState();
  const [hozirgiNewKun, setHozirgiNewKun] = useState();
  const [hozirgiNewOy, setHozirgiNewOy] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const humanNewDate = {
      day: day.current.value,
      month: month.current.value,
      year: year.current.value,
    };
    setHumanDate(humanNewDate && humanNewDate.day);
    setHumanMonth(humanNewDate && humanNewDate.month);
    setHumanYear(humanNewDate && humanNewDate.year);

    day.current.value = "";
    month.current.value = "";
    year.current.value = "";
  };
  useEffect(() => {
    const date = new Date();
    const hozirgiYil = date.getFullYear();
    const hozirgiKun = date.getDate();
    const hozirgiOy = date.getMonth() + 1;
    if (
      (hozirgiYil % 4 === 0 && hozirgiYil % 100 !== 0) ||
      hozirgiYil % 400 === 0
    ) {
      if (hozirgiOy === 1) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 2) {
        setHozirgiNewOy(29);
      }
      if (hozirgiOy === 3) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 4) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 5) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 6) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 7) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 8) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 9) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 10) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 11) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 12) {
        setHozirgiNewOy(31);
      }
      console.log("kabisa");
    } else {
      if (hozirgiOy === 1) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 2) {
        setHozirgiNewOy(29);
      }
      if (hozirgiOy === 3) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 4) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 5) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 6) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 7) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 8) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 9) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 10) {
        setHozirgiNewOy(31);
      }
      if (hozirgiOy === 11) {
        setHozirgiNewOy(30);
      }
      if (hozirgiOy === 12) {
        setHozirgiNewOy(31);
      }
      setHozirgiNewKun(hozirgiKun);
      setHozirgiNewYil(hozirgiYil * 365);
    }
    stop;

    // Foydalanuvchi
    if (
      (humanYear % 4 === 0 && humanYear % 100 !== 0) ||
      humanYear % 400 === 0
    ) {
      if (humanMonth === 1) {
        setHumanMonth(31);
      } else if (humanMonth === 2) {
        setHumanMonth(29);
      } else if (humanMonth === 3) {
        setHumanMonth(31);
      } else if (humanMonth === 4) {
        setHumanMonth(30);
      } else if (humanMonth === 5) {
        setHumanMonth(31);
      } else if (humanMonth === 6) {
        setHumanMonth(30);
      } else if (humanMonth === 7) {
        setHumanMonth(31);
      } else if (humanMonth === 8) {
        setHumanMonth(31);
      } else if (humanMonth === 9) {
        setHumanMonth(30);
      } else if (humanMonth === 10) {
        setHumanMonth(31);
      } else if (humanMonth === 11) {
        setHumanMonth(30);
      } else if (humanMonth === 12) {
        setHumanMonth(31);
      }
      console.log("kabisa");
    } else {
      if (humanMonth === 1) {
        setHumanMonth(31);
      } else if (humanMonth === 2) {
        setHumanMonth(29);
      } else if (humanMonth === 3) {
        setHumanMonth(31);
      } else if (humanMonth === 4) {
        setHumanMonth(30);
      } else if (humanMonth === 5) {
        setHumanMonth(31);
      } else if (humanMonth === 6) {
        setHumanMonth(30);
      } else if (humanMonth === 7) {
        setHumanMonth(31);
      } else if (humanMonth === 8) {
        setHumanMonth(31);
      } else if (humanMonth === 9) {
        setHumanMonth(30);
      } else if (humanMonth === 10) {
        setHumanMonth(31);
      } else if (humanMonth === 11) {
        setHumanMonth(30);
      } else if (humanMonth === 12) {
        setHumanMonth(31);
      }
      setHumanDate(humanDate);
      setHumanYear(humanYear * 365);
    }
  }, [humanDate, humanMonth, humanYear, aaassss]);
  console.log(hozirgiNewYil, hozirgiNewOy, hozirgiNewKun);
  console.log(humanYear, humanMonth, humanDate);
  return (
    <>
      <form className="forma" onSubmit={(e) => handleSubmit(e)}>
        <div className="humaninfo">
          <label className="inputLabel">
            <p>DAY</p>
            <input
              placeholder="DD"
              className="inputs"
              type="number"
              ref={day}
              required
            />
          </label>
          <label className="inputLabel">
            <p>MONTH</p>
            <input
              placeholder="MM"
              className="inputs"
              type="number"
              ref={month}
              required
            />
          </label>
          <label className="inputLabel">
            <p>YEAR</p>
            <input
              placeholder="YYYY"
              className="inputs"
              type="number"
              ref={year}
              required
            />
          </label>
        </div>
        <div className="btn-div">
          <hr className="btn-chiziq" />
          <button className="submitBtn" type="submit">
            |
          </button>
        </div>
      </form>

      <div className="humanyearsold">
        <span className="malumot">
          {humanYear ? (
            <p className="humanyearsolt-p">{humanYear}</p>
          ) : (
            <p className="humanyearsolt-p">--</p>
          )}
          <p>years</p>
        </span>
        <span className="malumot">
          {humanMonth ? (
            <p className="humanyearsolt-p">{humanMonth}</p>
          ) : (
            <p className="humanyearsolt-p">--</p>
          )}
          <p>months</p>
        </span>
        <span className="malumot">
          {humanDate ? (
            <p className="humanyearsolt-p">{humanDate}</p>
          ) : (
            <p className="humanyearsolt-p">--</p>
          )}
          <p>days</p>
        </span>
      </div>
    </>
  );
}

export default HumansInfo;
