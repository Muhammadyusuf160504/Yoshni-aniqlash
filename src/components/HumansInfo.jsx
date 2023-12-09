import { useEffect } from "react";
import { useRef, useState } from "react";

function HumansInfo() {
  const day = useRef();
  const month = useRef();
  const year = useRef();

  const [humanDate, setHumanDate] = useState();
  const [humanMonth, setHumanMonth] = useState();
  const [humanYear, setHumanYear] = useState();

  const [hozirgiNewYil, setHozirgiNewYil] = useState();
  const [hozirgiNewKun, setHozirgiNewKun] = useState();
  const [hozirgiNewOy, setHozirgiNewOy] = useState();

  const [humanDateAg, setHumanDateAg] = useState();
  const [humanMonthAg, setHumanMonthAg] = useState();
  const [humanYearAg, setHumanYearAg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHumanDate("");
    setHumanMonth("");
    setHumanYear("");

    const humanNewDate = {
      day: +day.current.value,
      month: +month.current.value,
      year: +year.current.value,
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
    if (hozirgiYil >= humanYear) {
      if (hozirgiOy > humanMonth) {
        if (hozirgiKun > humanDate) {
          setHumanYearAg(hozirgiYil - humanYear);
          setHumanMonthAg(hozirgiOy - humanMonth);
          setHumanDateAg(hozirgiKun - humanDate);
        } else {
          setHumanYearAg(hozirgiYil - humanYear);
          setHumanMonthAg(hozirgiOy - humanMonth - 1);
          setHumanDateAg(hozirgiKun - humanDate + 30);
        }
      } else if (hozirgiOy <= humanMonth) {
        setHumanYearAg(hozirgiYil - humanYear - 1);
        setHumanMonthAg(hozirgiOy - humanMonth + 12);
        if (hozirgiKun > humanDate) {
          setHumanDateAg(hozirgiKun - humanDate);
        } else {
          setHumanMonthAg(hozirgiOy - humanMonth - 1);
          setHumanDateAg(hozirgiKun - humanDate + 30);
        }
      }
    } else {
      console.log(`${humanYear} Bu yil hali kelmagan`);
    }

    // if (
    //   (hozirgiYil % 4 === 0 && hozirgiYil % 100 !== 0) ||
    //   hozirgiYil % 400 === 0
    // ) {
    //   setHozirgiNewKun(hozirgiKun);
    //   setHozirgiNewOy(hozirgiOy);
    //   setHozirgiNewYil(hozirgiYil);
    // } else {
    //   setHozirgiNewKun(hozirgiKun);
    //   setHozirgiNewOy(hozirgiOy);
    //   setHozirgiNewYil(hozirgiYil);
    // }

    // if (
    //   (humanYear % 4 === 0 && humanYear % 100 !== 0) ||
    //   humanYear % 400 === 0
    // ) {
    //   setHozirgiNewKun(hozirgiKun);
    //   setHozirgiNewOy(hozirgiOy);
    //   setHumanYear(humanYear);
    // } else {
    //   setHozirgiNewKun(hozirgiKun);
    //   setHozirgiNewOy(hozirgiOy);
    //   setHozirgiNewYil(hozirgiYil);
    // }

    // Foydalanuvchi

    // if (
    //   (humanYear % 4 === 0 && humanYear % 100 !== 0) ||
    //   humanYear % 400 === 0
    // ) {
    //   if (humanMonth >= hozirgiNewOy) {
    //     setHumanDateAg(humanDate);
    //     setHumanMonthAg(humanMonth + 12 - humanMonth);
    //     setHumanYearAg(humanYear + 1);
    //     console.log(humanYear);
    //   } else {
    //   }
    // } else if (humanMonth < hozirgiNewOy) {
    //   setHumanYearAg(humanYear);
    //   setHumanMonthAg(humanMonth);
    //   if (humanDate >= hozirgiNewKun) {
    //     setHumanDateAg(humanDate + 30);
    //   } else {
    //     setHumanDateAg(humanDate);
    //   }
    // } else {
    //   setHumanYear(humanYear);
    //   if (humanDate >= hozirgiNewKun) {
    //     setHumanDateAg(humanDate + 30);
    //     setHumanMonthAg(humanMonth - 1);
    //   } else {
    //     setHumanMonthAg(humanMonth);
    //     setHumanDateAg(humanDate);
    //   }
    // }
    // if (hozirgiNewYil >= humanYearAg) {
    //   console.log(humanYear);
    //   setHumanYearAg(hozirgiNewYil - humanYearAg);
    // } else {
    //   console.log(`${humanYearAg} Bu yil hali kelmagan`);
    // }
  }, [humanDate]);
  console.log(humanYearAg);
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
          {humanYearAg ? (
            <p className="humanyearsolt-p">{humanYearAg}</p>
          ) : (
            <p className="humanyearsolt-p">--</p>
          )}
          <p>years</p>
        </span>
        <span className="malumot">
          {humanMonthAg ? (
            <p className="humanyearsolt-p">{humanMonthAg}</p>
          ) : (
            <p className="humanyearsolt-p">--</p>
          )}
          <p>months</p>
        </span>
        <span className="malumot">
          {humanDateAg ? (
            <p className="humanyearsolt-p">{humanDateAg}</p>
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
