
const Abbr = ({required}) => {
	if ( !required ) {
		return null;
	}
	
	return <abbr className="text-red-500" style={{textDecoration: 'none'}} title="required">*</abbr>
}





export default Abbr