import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Link from "../components/Link";
import Nav from "../components/Nav";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'quantity', headerName: '款式数量', width: 100 },
    { field: 'sku', headerName: 'SKU',  width: 50 },
    { field: 'projectType', headerName: '项目类型', width: 100 },
    { field: 'type', headerName: '类型', width: 100 },
    { field: 'content', headerName: '内容', width: 100 },
    { field: 'note', headerName: '备注', width: 100 },
    { field: 'reconciliation', headerName: '是否核对', width: 90 },
    { field: 'emergencySituation', headerName: '紧急情况', width: 90 },
    { field: 'model ', headerName: '模特', width: 90 },
    { field: 'area', headerName: '场地', width: 90 },
    { field: 'modelingFee', headerName: '模特费', width: 90 },
    { field: 'way', headerName: '方式', width: 90 },
    { field: 'price', headerName: '单价', width: 90 },
    { field: 'provider', headerName: '供应商', width: 90 },
    { field: 'producers', headerName: '生产商', width: 90 },
    { field: 'technicalStaff', headerName: '技术人员', width: 90 },
    { field: 'customizable', headerName: '自定义', width: 90 }
];

const rows = [
    { id: 1, quantity: 1, sku: '1个', projectType: '正常接单', type: '拍摄', content: '纯色', note:'',reconciliation:'是',emergencySituation:'一般', model:'张三', area:'影棚', modelingFee:'100', way:'按组', price:'10', provider:'', producers:'', technicalStaff:'张三', customizable:''},
    { id: 2, quantity: 1, sku: '1个', projectType: '正常接单', type: '设计', content: '模特平铺', note:'',reconciliation:'否',emergencySituation:'紧急', model:'张三', area:'影棚', modelingFee:'100', way:'按组', price:'10', provider:'', producers:'', technicalStaff:'张三', customizable:''},
    { id: 3, quantity: 1, sku: '1个', projectType: '正常接单', type: '拍摄', content: '纯色', note:'',reconciliation:'是',emergencySituation:'一般', model:'张三', area:'影棚', modelingFee:'100', way:'按组', price:'10', provider:'', producers:'', technicalStaff:'张三', customizable:''},
    { id: 4, quantity: 1, sku: '1个', projectType: '正常接单', type: '设计', content: '模特平铺', note:'',reconciliation:'否',emergencySituation:'紧急', model:'张三', area:'影棚', modelingFee:'100', way:'按组', price:'10', provider:'', producers:'', technicalStaff:'张三', customizable:''},
    { id: 5, quantity: 1, sku: '1个', projectType: '正常接单', type: '拍摄', content: '纯色', note:'',reconciliation:'是',emergencySituation:'一般', model:'张三', area:'影棚', modelingFee:'100', way:'按组', price:'10', provider:'', producers:'', technicalStaff:'张三', customizable:''}
];

const columns2: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'picture', headerName: '参考图片', width: 150 },
    { field: 'directory', headerName: '项目路径',  width: 150 },
    { field: 'outputPixel', headerName: '输出像素', width: 150 },
    { field: 'video', headerName: '视频参考', width: 150 },
    { field: 'place', headerName: '场地信息', width: 150 },
    { field: 'group', headerName: '群聊名', width: 150 },
    { field: 'wechat', headerName: '业务微信', width: 150 },
    { field: 'platform', headerName: '平台', width: 150 },
    { field: 'shop', headerName: '店铺', width: 150 },
];

const rows2 = [
    { id: 1, picture: '', directory: 'U:2023年V月份数码饰品手链', outputPixel: '', video: '', place:'北苑街道17号3楼',group:'',wechat:'', platform:'', shop:''},
];

export default function BussinessManagementPage() {

      const handleAdd = () => {}
      const handleImport = () => {}
      const handleRef = () => {}
      const handleDelete = () => {}
      const handleSave = () => {}



      return (
          <div>
              <Nav/>
              <div style={{ height: 400, width: '100%' }}>
                <Typography >
                     <Button color="primary" onClick={handleAdd}>
                         新增行
                     </Button>
                     <Button color="error" onClick={handleDelete}>
                         删除行
                     </Button>
                     <Button color="primary" onClick={handleImport}>
                         项目导入
                     </Button>
                     <Button color="primary" onClick={handleRef}>
                         引用项目
                     </Button>
                     <Button color="primary" onClick={handleSave}>
                         保存
                     </Button>
                </Typography>
                <DataGrid
                   rows={rows}
                   columns={columns}
                   initialState={{
                     pagination: {
                       paginationModel: { page: 0, pageSize: 5 },
                     },
                   }}
                   pageSizeOptions={[5, 10]}
                   checkboxSelection
                />
              </div>
              <div style={{ height: 80}} ></div>
              <div style={{ height: 400, width: '100%' }}>
                   <Typography  >
                       <Button color="primary" onClick={handleAdd}>
                            保存
                       </Button>
                       <Button color="primary" onClick={handleDelete}>
                            修改
                       </Button>
                       <Button color="error" onClick={handleImport}>
                            删除
                       </Button>
                   </Typography>
                   <DataGrid
                       rows={rows2}
                       columns={columns2}
                       initialState={{
                           pagination: {
                             paginationModel: { page: 0, pageSize: 5 },
                           },
                       }}
                       pageSizeOptions={[5, 10]}
                       checkboxSelection
                   />
              </div>
          </div>
      )
}
