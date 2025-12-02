import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type FilterProps = {
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  allBrands: string[];
};

const Filter: React.FC<FilterProps> = ({ selectedBrands, toggleBrand, allBrands }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10, backgroundColor: 'white' }}>
      {allBrands.map((brand) => {
        const selected = selectedBrands.includes(brand);
        return (
          <TouchableOpacity
            key={brand}
            onPress={() => toggleBrand(brand)}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 12,
              margin: 4,
              borderRadius: 20,
              backgroundColor: selected ? '#007AFF' : '#E0E0E0',
            }}
          >
            <Text style={{ color: selected ? 'white' : 'black' }}>{brand}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Filter;
