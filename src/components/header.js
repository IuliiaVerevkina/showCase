function Header() {
	return (
		<header className="cyan darken-1">
			<div className="container ">
				<div className="row header-logo">
					<div className="col m8 s6 brand-logo white-text">
						showcase
					</div>
					<div className="col m4 s6">
						<a
							target="_blank"
							className="right white-text git_hub"
							href="https://github.com/IuliiaVerevkina" rel="noreferrer"
						>
							<i className="material-icons">perm_identity</i>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
export default Header;