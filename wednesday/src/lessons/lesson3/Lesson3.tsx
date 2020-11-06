import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<any[]|string>('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<any[]|string>('');

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
        .then(response=>{
            (response.data.Response==='True')
            ?setSerachResult(response.data.Search)
            :setSerachResult(response.data.Error)
        })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
        .then(response=>{
            response.Response==='True'
            ?setSerachResultByType(response.Search)
            :setSerachResultByType(response.Error)
        })
    }
    const resault = (param: any[] | string) => {
      return Array.isArray(param)
        ? param.map((el) => {
            return (
              <li key={el.imdbID}>
                <div>{el.Title}</div>
                <img src={el.Poster} alt="img" />
                <div>{el.Year}</div>
                <div>{el.Type}</div>
              </li>
            );
          })
        : param;
    };
    return (
      <div>
        <h1>Promises</h1>
        <div>
          <h3>
            <p>Search by name:</p>
          </h3>
          <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)} />
          <button onClick={searchFilm}>Search</button>
          <div>
            <ul>
              {resault(serachResult)}
            </ul>
          </div>
        </div>

        <div>
          <h3>
            <p>Search by type:</p>
          </h3>
          <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)} />
          <button onClick={searchByType} data-t="movie">
            Movie
          </button>
          <button onClick={searchByType} data-t="series">
            Series
          </button>
          <div>
            <ul>
              {resault(serachResultByType)}
            </ul>
          </div>
        </div>
      </div>
    );
}
export default Lesson3;