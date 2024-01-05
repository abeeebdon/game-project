# A frontend mentor project

The figma and asset for the styling wwere provided by frontend mentor

# Pages

It is created with react although i did the project initially with vanilla javascript
It is made up of six to eight pages with part for selections.

#### Landing page

The landing page is kept in the home folder
The inputs are stored for use

#### Selection page

Here is the selction for monthly and yearly plan

####

 <div className="btn">
            <button id="go" onClick={() => navigate('/select')}>
              Go Back
            </button>
            <button onClick={() => navigate('/pick')}>Next Step</button>
          </div>

            <div className="btn" style={{ marginTop: '50px' }}>
            <button id="go" onClick={() => navigate('../select')}>
              Go Back
            </button>
            <button onClick={() => navigate('../summary')}>Next Step</button>
          </div>


             <div className="btn-container">
        <div className="btn" style={{ marginTop: '50px' }}>
          <button id="go">Go Back</button>
          <button onClick={() => navigate('../finish')}>Confirm</button>
        </div>
      </div>
