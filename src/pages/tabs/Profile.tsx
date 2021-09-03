import React, { useState } from 'react'
import { ActionSheet, Button, Toast } from 'antd-mobile'

const actions: { text: string; key: string }[] = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' },
]

function Profile() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="profile-page h-min-full">
      <Button onClick={() => setVisible(true)}>取消按钮和额外描述</Button>
      <ActionSheet
        extra="请选择你要进行的操作"
        cancelText="取消"
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onAction={(action) => {
          if (action.key === 'edit' || action.key === 'copy') {
            Toast.show(`点击了${action.text}`)
          }
        }}
        afterClose={() => {
          Toast.show('动作面板已关闭')
        }}
      />
    </div>
  )
}

export default Profile
