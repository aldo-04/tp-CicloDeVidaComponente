import Footer from "./footer"
import TopBar from "./topBar"
import ContentRowTop from "./contentRowTop"
import LastMovie from "./LastMovie"
import Genres from "./Genres"
import Table from "./Table"


function ContentWrapper() {
    return (   
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
                <TopBar />
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<ContentRowTop />
					<div className="row">
						<LastMovie />
						<Genres />
					</div>
				</div>

				<Table />
				
			</div>
			<Footer />
		</div>
    )
}

export default ContentWrapper