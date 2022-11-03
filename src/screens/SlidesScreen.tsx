import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
          height: 600,
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 250,
            resizeMode: 'center',
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        paddingTop: 50,
        justifyContent: 'center',
      }}>
      <Carousel
        // loop
        pagingEnabled={true}
        snapEnabled={true}
        data={items}
        renderItem={({item}) => renderItem(item)}
        width={screenWidth}
        height={screenWidth}
        onSnapToItem={index => console.log('current index:', index)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  subTitle: {
    fontSize: 16,
  },
});

// const PaginationItem: React.FC<{
//   index: number;
//   backgroundColor: string;
//   length: number;
//   animValue: Animated.SharedValue<number>;
//   isRotate?: boolean;
// }> = props => {
//   const {animValue, index, length, backgroundColor, isRotate} = props;
//   const width = 10;

//   const animStyle = useAnimatedStyle(() => {
//     let inputRange = [index - 1, index, index + 1];
//     let outputRange = [-width, 0, width];

//     if (index === 0 && animValue?.value > length - 1) {
//       inputRange = [length - 1, length, length + 1];
//       outputRange = [-width, 0, width];
//     }

//     return {
//       transform: [
//         {
//           translateX: interpolate(
//             animValue?.value,
//             inputRange,
//             outputRange,
//             Extrapolate.CLAMP,
//           ),
//         },
//       ],
//     };
//   }, [animValue, index, length]);
//   return (
//     <View
//       style={{
//         backgroundColor: 'white',
//         width,
//         height: width,
//         borderRadius: 50,
//         overflow: 'hidden',
//         transform: [
//           {
//             rotateZ: isRotate ? '90deg' : '0deg',
//           },
//         ],
//       }}>
//       <Animated.View
//         style={[
//           {
//             borderRadius: 50,
//             backgroundColor,
//             flex: 1,
//           },
//           animStyle,
//         ]}
//       />
//     </View>
//   );
// };
