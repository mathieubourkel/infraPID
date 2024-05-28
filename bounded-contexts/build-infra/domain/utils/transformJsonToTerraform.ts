export function transformToTerraform(atributes:object, indent = 1) {
    let terraformString: string = ''
    for (const [key, value] of Object.entries(atributes)) {
        if (typeof value === 'object') {
            terraformString += `${'    '.repeat(indent)}${key} {\n`;
            terraformString += transformToTerraform(value, indent + 1);
            terraformString += `${'    '.repeat(indent)}}\n`;
        } else {
            terraformString += `${'    '.repeat(indent)}${key} = "${value}"\n`;
        }
    }

    if (indent === 1) terraformString += `}\n\n`;
    
    return terraformString;
}