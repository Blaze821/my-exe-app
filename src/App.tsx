// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Space, Row, Col, Slider } from 'antd';
// import { Stage, Layer, Rect } from 'react-konva';

// interface GradientColor {
//   position: number;
//   color: string;
// }

// interface GradientRectConfiguratorProps {}

// const GradientRectConfigurator: React.FC<GradientRectConfiguratorProps> = () => {
//   const [form] = Form.useForm();
//   const [gradientColors, setGradientColors] = useState<GradientColor[]>([
//     { position: 0, color: 'red' },
//     { position: 1, color: 'blue' },
//   ]);

//   const handleFinish = (values: { gradientColors: GradientColor[] }) => {
//     // 更新渐变色配置
//     setGradientColors(values.gradientColors);
//   };

//   const handleAddColor = () => {
//     form.validateFields().then(() => {
//       const nextPosition = parseFloat(form.getFieldValue('nextPosition'));
//       form.setFieldsValue({
//         gradientColors: [...gradientColors, { position: nextPosition, color: '#000000' }],
//         nextPosition: undefined, // 清空输入框
//       });
//     });
//   };

//   // useEffect 来监听 gradientColors 的变化，并将值设置到表单中
//   useEffect(() => {
//     form.setFieldsValue({ gradientColors });
//   }, [gradientColors, form]);

//   return (
//     <Row gutter={16}>
//       <Col span={12}>
//         <Stage width={400} height={200}>
//           <Layer>
//             <Rect
//               width={400}
//               height={200}
//               fillLinearGradientStartPoint={{ x: 0, y: 0 }}
//               fillLinearGradientEndPoint={{ x: 400, y: 0 }}
//               fillLinearGradientColorStops={gradientColors.reduce(
//                 (acc, { position, color }) => {
//                   // @ts-ignore
//                   acc.push(position, color);
//                   return acc;
//                 },
//                 []
//               )}
//             />
//           </Layer>
//         </Stage>
//       </Col>
//       <Col span={12}>
//         <Form
//           form={form}
//           name="gradientRectConfig"
//           onFinish={handleFinish}
//         >
//           <Form.List name="gradientColors">
//             {(fields, { add, remove }) => (
//               <>
//                 {fields.map(({ key, name, fieldKey, ...restField }) => (
//                   <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
//                     <Form.Item
//                       {...restField}
//                       name={[name, 'position']}
//                       fieldKey={[fieldKey, 'position']}
//                       rules={[{ required: true, message: 'Position is required' }]}
//                     >
//                       <Slider min={0} max={1} step={0.1} />
//                     </Form.Item>
//                     <Form.Item
//                       {...restField}
//                       name={[name, 'color']}
//                       fieldKey={[fieldKey, 'color']}
//                       rules={[{ required: true, message: 'Color is required' }]}
//                     >
//                       <Input type="color" />
//                     </Form.Item>
//                     <Button type="danger" onClick={() => remove(name)}>
//                       Remove
//                     </Button>
//                   </Space>
//                 ))}
//                 <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
//                   <Form.Item
//                     name="nextPosition"
//                     rules={[{ required: true, message: 'Next Position is required' }]}
//                   >
//                     <Input
//                       placeholder="Next Position (e.g., 0.5)"
//                       type="number"
//                       step="0.1"
//                       min="0"
//                       max="1"
//                     />
//                   </Form.Item>
//                   <Button type="dashed" onClick={() => handleAddColor()} block>
//                     Add Gradient Color
//                   </Button>
//                 </Space>
//               </>
//             )}
//           </Form.List>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Apply Changes
//             </Button>
//           </Form.Item>
//         </Form>
//       </Col>
//     </Row>
//   );
// };

// export default GradientRectConfigurator;


// App.js
import React from 'react';
import BarrageContainer from './BarrageContainer';

const App = () => {
  const barrages = [
    "Hello World!",
    "React is awesome!",
    "Testing the barrage",
    "User interaction",
    "Customizing styles",
    "Adding more messages"
  ]

  

  return (
    <div className="app-container">
      <BarrageContainer barrages={barrages} scrollMode="full-screen" />
      {/* Other modes: scrollMode="half-screen" or scrollMode="multi-row" */}
    </div>
  );
};

export default App;
