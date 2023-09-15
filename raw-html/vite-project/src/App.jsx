const CUSTOM_HTML = `
  <h1>Hi</h1>
  <div>My name is Logan</div>
`;

function App() {
	return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
}

export default App;
