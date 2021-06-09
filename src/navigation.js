import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

const options = () => ({
  options: {
    animations: {
      push: {
        enabled: true,
        waitForRender: false,
      },
      pop: {
        enabled: true,
        waitForRender: false,
      },
    },
  },
});

export const setRoot = (componentId) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: `stack:${componentId}`,
        children: [
          {
            component: {
              id: componentId,
              name: componentId,
            },
          },
        ],
      },
    },
  });

export const push = (fromComponentId, toComponentId, passProps) =>
  Navigation.push(fromComponentId, {
    component: {
      id: toComponentId,
      name: toComponentId,
      passProps,
      ...options(),
    },
  });

export const popTo = (toComponentId) => Navigation.popTo(toComponentId);

export const openModal = (componentId, passProps) =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: componentId,
            name: componentId,
            passProps,
            options: {
              modalPresentationStyle:
                OptionsModalPresentationStyle.overCurrentContext,
              layout: {
                backgroundColor: 'transparent',
                componentBackgroundColor: 'transparent',
              },
              animations: {
                showModal: {
                  enabled: false,
                  enter: {
                    enabled: false,
                  },
                  exit: {
                    enabled: false,
                  },
                },
                dismissModal: {
                  enabled: false,
                  enter: {
                    enabled: false,
                  },
                  exit: {
                    enabled: false,
                  },
                },
              },
            },
          },
        },
      ],
    },
  });

export const closeModal = (componentId) => Navigation.dismissModal(componentId);
