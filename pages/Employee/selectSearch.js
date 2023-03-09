import * as React from React
import SelectSearch from 'react-select-search';

const statusSelect = () => {

    const status = [
        {name : "Permanent", value: "pr"},
        {name:"Contract", value: "ct"}
    ]

    return(
        <SelectSearch options={status} value="sv" name="language" placeholder="Choose your language" />
    );
};

export default statusSelect