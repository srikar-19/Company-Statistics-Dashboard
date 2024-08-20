import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDashboards } from './actions';
import dashboardData from './dashboardData.json';
import Dashboard from './components/Dashboard';
import './styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {

  const dispatch = useDispatch();
  const dashboards = useSelector((state)=> state.dashboards);
  console.log(dashboards);

  const [searchTerm, setSearchTerm] = useState(''); 

  const categories = dashboardData.categories;

  useEffect(() => {
    dispatch(loadDashboards(dashboardData.categories));
  }, [dispatch]);

  const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };

  const filterWidgets = () => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    return categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(lowerCasedSearchTerm) ||
            (Array.isArray(widget.content)
                ? widget.content.some((item) =>
                    item.status.toLowerCase().includes(lowerCasedSearchTerm) ||
                    item.count.toString().includes(lowerCasedSearchTerm)
                )
                : widget.content.toLowerCase().includes(lowerCasedSearchTerm)
            )
        ),
    })).filter(category => category.widgets.length > 0);  // Remove categories with no matching widgets
  };

  const filteredCategories = filterWidgets();

  return (
    <div className="App">
      <div className='w-25 mx-auto mt-4 mb-5 position-relative'>
        <FontAwesomeIcon icon={faSearch} className='search position-absolute' />
        <input type="text" placeholder="Search Anything..." value={searchTerm} onChange={handleSearchChange} className="form-control searchControl border border-3"/>
      </div>
      <h5 className='start ms-5 mb-4' style={{fontFamily:'sans-serif'}}><strong>CNAPP Dashboard</strong></h5>
      {filteredCategories.map((category) => (
                <Dashboard key={category.id} category={category} categories={filteredCategories} />
            ))}
      </div>
  );
};

export default App;