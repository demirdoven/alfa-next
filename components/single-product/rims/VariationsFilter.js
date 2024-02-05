import { useState } from 'react';

const VariationsFilter = ({ variants }) => {
  const [selectedAttributes, setSelectedAttributes] = useState({});

  const handleAttributeChange = (attribute, option) => {
    setSelectedAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: option,
    }));
  };

  const filteredVariants = variants.filter((variant) => {
    return Object.keys(selectedAttributes).every((attribute) => {
      const selectedOption = selectedAttributes[attribute];
      const variantAttribute = variant.attributes.find(
        (attr) => attr.slug === attribute
      );
      return variantAttribute && variantAttribute.option === selectedOption;
    });
  });

  return (
    <div>
      <h2>Variations Filter</h2>
      {Object.keys(selectedAttributes).map((attribute) => (
        <div key={attribute}>
          <p>{attribute}</p>
          <select
            value={selectedAttributes[attribute] || ''}
            onChange={(e) => handleAttributeChange(attribute, e.target.value)}
          >
            <option value="">All</option>
            {Array.from(new Set(variants.map((v) => v.attributes.find((a) => a.slug === attribute)?.option))).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <ul>
        {filteredVariants.map((variant) => (
          <li key={variant.id}>
            <a href={variant.permalink} target="_blank" rel="noopener noreferrer">
              {variant.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VariationsFilter;
