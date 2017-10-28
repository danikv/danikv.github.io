export const locationLabaledFormConfiguration = (name, address, lat, long, category) => {
    return {
        configuration: [{
            description: 'Name : ' + name,
            name: 'name'
        },{
            description: 'Address : ' + address,
            name: 'address'
        },{
            description: 'Latitude : ' + lat,
            name: 'latitude'
        },{
            description: 'Longitude : ' + long,
            name: 'longitude'
        },{
            description: 'Category : ' + category,
            name: 'category'
        }]
    }
}

export const locationInputFormConfiguration = (object, name, address, lat, long, category) => {
    return {
        inputs: [{
            validationMessage: 'name cannot be empry',
            validation: object.validateName.bind(object),
            id: 'name',
            onChange: object.handleNameChange.bind(object),
            value: name,
            type: "text"
        },
        {
            validationMessage: 'address cannot be empry',
            validation: object.validateAddress.bind(object),
            id: 'address',
            onChange: object.handleAddressChange.bind(object),
            value: address,
            type: "text"
        },
        {
            validationMessage: 'latitude cannot be empry',
            validation: object.validateLatitude.bind(object),
            id: 'Latitude',
            onChange: object.handleLatitudeChange.bind(object),
            value: lat,
            type: "number"
        },
        {
            validationMessage: 'longitude cannot be empry',
            validation: object.validateLongitude.bind(object),
            id: 'Longitude',
            onChange: object.handleLongitudeChange.bind(object),
            value: long,
            type: "number"
        }
        ],
        selects: [{
            validationMessage: 'category cannot be empry',
            validation: object.validateCategory.bind(object),
            id: 'category',
            onChange: object.handleCategoryChange.bind(object),
            options: object.props.categories,
            value: category,
            type: "text"
        }],
        onSubmit: object.submitItem.bind(object)
    }
}

export const categoryInputFormConfiguration = (object, category) => {
    return {
            configuration: [{
            validationMessage: 'category cannot be empty or exsiting category',
            validation: object.validateCategory.bind(object),
            id: 'category',
            onChange: object.categoryChange.bind(object),
            value: category,
            type: "text",
        }],
        onSubmit: object.submitItem.bind(object)
    }
}