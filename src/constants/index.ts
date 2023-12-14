export const NAME = 'Custom-attributes';
export const DESCRIPTION = 'Custom attributes for Home Assistant';
export const URL = 'https://github.com/Mariusthvdb/custom-attributes';

export enum SELECTOR {
    HUI_VIEW = 'hui-view',
    MORE_INFO_CONTENT = 'more-info-content',
    MORE_INFO_DEFAULT = 'more-info-default',
    MORE_INFO_VACUUM = 'more-info-vacuum',
    MORE_INFO_LIGHT = 'more-info-light',
    MORE_INFO_SIREN = 'more-info-siren',
    HA_ATTRIBUTES = 'ha-attributes'
}

/**
 * If some more-info dialog fails selecting the attributes most probably it is because there is an element missing here
 * Just inspect the more-info dialog and check for the element that is located in:
 * ha-more-info-dialog > ha-dialog > ha-more-info-info > more-info-content > more-info-xxxx
 * If that element is not in this list, just add it to the selectors and then add the proper selector here
 **/ 
export const MORE_INFO_CONTENT_CHILDREN = [
    SELECTOR.MORE_INFO_DEFAULT,
    SELECTOR.MORE_INFO_VACUUM,
    SELECTOR.MORE_INFO_LIGHT,
    SELECTOR.MORE_INFO_SIREN
];

export const ESCAPE_REG_EXP = /[.?+^$[\]\\(){}|-]/g;

export const ALL_FILTER = 'all';