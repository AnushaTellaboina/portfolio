import './index.css'

const Projects = () => (
  <div className="form">
    <h1>Add Project</h1>

    <form>
      <div className="each">
        <label htmlFor="name">Project Name</label>
        <br />

        <input type="text" id="name" />
      </div>
      <div className="each">
        <label htmlFor="link">Project link</label>
        <br />
        <input type="text" id="link" />
      </div>
      <div className="each">
        <label htmlFor="desc">Description</label>
        <br />
        <textarea className="text-area" rows="4" cols="20" id="desc" />
      </div>
      <div className="bt">
        <button type="button" className="yellow-btn">
          Add
        </button>
      </div>
    </form>
  </div>
)

export default Projects
