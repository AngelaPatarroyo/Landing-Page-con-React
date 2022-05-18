import React from "react";

export function Card() {
	return (
		<div className="col-12 col-sm-6 col-md-3 my-3 my-md-0">
			<div className="card p-0 m-0">
				<img
					src="https://mus.uy/landing/wp-content/uploads/2016/04/rada.jpg"
					className="card-img-top w-100 "
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title text-center">asd</h5>
					<p className="card-text text-center">adsdas</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="adas" className="btn btn-primary">
						Click
					</a>
				</div>
			</div>
		</div>
	);
}
