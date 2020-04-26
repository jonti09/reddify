import React, { useEffect, useState } from 'react';

function Search(props) {
  const { search } = props;
  const [searchData, setSearchData] = useState({ q: '', limit: 25, sort: 'hot' });
  let searchTerm = null;

  useEffect(() => {
    searchTerm.focus();
  });

  const setSearchTerm = (event) => {
    setSearchData({ ...searchData, q: event.target.value });
  };

  const setSearchSortType = (event) => {
    setSearchData({ ...searchData, sort: event.target.value });
  };

  const setSearchLimit = (event) => {
    setSearchData({ ...searchData, limit: event.target.value });
  };

  const formSubmitted = (event) => {
    search(searchData);
    event.preventDefault();
  };

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      formSubmitted(event);
    }
  };

  const sortOptions = [
    {
      name: 'hot',
      label: 'Hot',
    },
    {
      name: 'relevance',
      label: 'Related',
    },
    {
      name: 'top',
      label: 'Top',
    },
    {
      name: 'new',
      label: 'New',
    },
    {
      name: 'comments',
      label: 'Comments',
    },
  ];

  const limitOptions = [
    {
      value: 10,
      label: 10,
    },
    {
      value: 25,
      label: 25,
    },
    {
      value: 50,
      label: 50,
    },
    {
      value: 75,
      label: 75,
    },
    {
      value: 100,
      label: 100,
    },
  ];
  return (
    <div className="jumbotron mt-3">
      <form onSubmit={formSubmitted} onKeyPress={keyPressed}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Search</label>
            <input
              ref={(input) => {
                searchTerm = input;
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Search the whole of Reddit"
              onChange={setSearchTerm}
            />
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="type-selection">Type</label>
              <select
                className="form-control"
                id="type-selection"
                onChange={setSearchSortType}
                defaultValue={searchData['sortOptions']}
              >
                {sortOptions.map((option) => {
                  return (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group col">
              <label htmlFor="no-of-results">Results</label>
              <select
                className="form-control"
                id="no-of-results"
                onChange={setSearchLimit}
                defaultValue={searchData['limit']}
              >
                {limitOptions.map((option) => {
                  return (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Search;
