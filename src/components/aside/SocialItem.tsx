import React from 'react';
import Icon from '../common/Icon';
import Card from '../common/Card';

type ISocialItem = {
    id: number;
    name: string;
    icon: string;
    link: string;
}

const SocialItem = ({ icon, link }: ISocialItem) => {
    return (
        <a href={link} target='_blank'>
            <Card className="h-[5.4rem] w-[5.4rem] flex items-center justify-center hover:-translate-y-3 text-xl text-100 hover:text-secondary-100 ">
                <Icon icon={icon} />
            </Card>
        </a>
    )
}

export default SocialItem